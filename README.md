# Framer Motion

[공식문서](https://www.framer.com/docs/introduction/)

[깃허브](https://github.com/framer/motion)

# Props

- initial
- animate
- transition
- variants
- style
- whielHover / whileTap
- drag / dragContraints

### initial

- initial value

### animate

- changing value

### transition

- `bounce`(0.8) and `duration`(0.3) will be overridden if `stiffness`(100), `damping`(10) or `mass`(1) are set

- type `spring` by default

- ```javascript
  transition={{
    default: { duration: 2 },
    fill: { duration: 3, delay: 1 },
  }}
  ```
  위처럼 속성별로 `duration` 값을 다르게 설정할 수 있다

### variants

- variants object를 만들고,
  property 이름을 지정해 작성하면,
  motion은 이를 찾는다

  ```javascript
  const myVars = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
  };
  ```

  ```javascript
  <Box variants={myVars} initial="start" animate="end" />
  ```

- 자식 컴포넌트들은 부모 컴포넌트의 `initial`과 `animate` 속성을 상속받는다

### style

- `x`, `y`, `scale`, `heigth`, `backgroundColor` 등 css value

### whielHover / whileTap

- 이외 `whileFocus`, `whileDrag`, `whileInView`

### drag / dragContraints / dragElastic(0.5)

- `drag="x"`, `drag="y"` 로 축을 제한할 수 있다

- ```javascript
  dragContraints={{ top: 0, right: 0, bottom: 0, left: 0, }}

  // === dragSnapToOrigin 속성
  ```

  위처럼 직접 박스를 만들거나, `useRef`를 사용하여 제한한다

# Motion Value

- ```javascript
  const x = useMotionValue(0);
  // useTransform(motionValue, inputRange, outputRange[, options])
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  ```

- `useMotionValue(0)` 등 MotionValue가 바뀌어도, React state로 살지 않기 때문에, 리렌더링 되지 않는다(`without triggering React's render cycle`)

# SVG path animation

- ```javascript
  const StSvg = styled.svg`
    width: 200px;
    height: 200px;
    stroke: #f53000;
    stroke-width: 0.3;
  `;
  ```

  `svg`의 `SC` 설정으로 `stroke` 혹은 `stroke-width` 설정이 가능하다

  ```javascript
  const svgVariants = {
    start: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    end1: {
      pathLength: 1,
      fill: "#F53000",
    },
  };
  ```

  `pathLength`나 `fill` 속성의 애니메이션을 variants로 선언하여 아래 코드와 같이 지정한다

  ```javascript
  <StSvg viewBox="0 0 25 27" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      variants={svgVariants}
      initial="start"
      animate="end1"
      transition={{
        default: { duration: 2 },
        fill: { duration: 3, delay: 1 },
      }}
      d="M5.0416 10.4955H0.553223L5.73268 15.6277V12.053V10.4955H5.0416Z"
    ></motion.path>
  </StSvg>
  ```

# AnimatePresence

- `AnimatePresence`의 자식 요소가 React 트리에서 제거될 때 애니메이션을 제거할 수 있다 (`setTimeout()` 함수와 같이 unmount를 요소에 알리고 애니메이션이 완료될 때까지 지연시킨다)

- 자식 요소인 각 `motion` 컴포넌트들은 고유한 `key`값이 있어야, 트리에서 `AnimatePresence`가 컴포넌트의 존재를 추적할 수 있다
  따라서, `key`값만을 활용하여 컴포넌트의 `exit` 애니메이션을 활성화할 수 있다
