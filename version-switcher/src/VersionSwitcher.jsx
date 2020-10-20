import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { usePopper } from 'react-popper';

const blue = '#112A46';
const darkblue = '#081523';
const lightblue = '#52B6CA';

const Container = styled.div`
  font-family: sans-serif;
`;

const Button = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: auto;
  height: auto;
  background-color: ${({ open }) => (open ? darkblue : blue)};
  color: white;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s, box-shadow 0.1s;
  will-change: background-color, box-shadow;

  &:hover {
    background-color: ${darkblue};
  }
`;

const Popover = styled.div`
  background: ${blue};
  pointer-events: ${({ open }) => (open ? 'unset' : 'none')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  border: 5px solid ${blue};
  border-radius: 5px;
  color: ${blue};
`;

const ArrowContainer = styled.div`
  width: 6px;
  height: 6px;
`;

const Arrow = styled.div`
  background: ${blue};
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
  margin-top: 2px;
`;

const Content = styled.div`
  padding: 20px;
`;

const Link = styled.a`
  color: white;
  margin: 5px;
  display: block;
  text-decoration: none;
  text-align: center;
  outline: none;

  font-weight: ${({ current }) => (current ? 'bold' : 'normal')};

  &:hover,
  &:focus,
  &:active {
    color: ${lightblue};
  }
`;

const VersionSwitcher = ({ currentVersion, versions }) => {
  const containerRef = useRef(null);

  const [referenceElement, setReferenceElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (open && !event.composedPath().includes(containerRef.current)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (open && event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleWindowClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('click', handleWindowClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowElement,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
    placement: 'top-end',
  });

  return (
    <Container ref={containerRef}>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
        open={open}
        ref={setReferenceElement}
        type="button"
      >
        v: 
        {' '}
        {currentVersion}
      </Button>

      <Popover open={open} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        <Content>
          {versions.map((version) => (
            <Link
              current={version === currentVersion}
              href={`../${version}${window.location.hash}`}
              key={version}
            >
              {version}
            </Link>
          ))}
        </Content>
        <ArrowContainer ref={setArrowElement} style={styles.arrow} {...attributes.arrow}>
          <Arrow />
        </ArrowContainer>
      </Popover>
    </Container>
  );
};

export default VersionSwitcher;
