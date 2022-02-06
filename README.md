# Framer Motion

[공식문서](https://www.framer.com/docs/introduction/)

[깃허브](https://github.com/framer/motion)

## Props

- initial
- animate
- transition
- variants
- whielHover / whileTap
- drag / dragContraints

### initial

- initial value

### animate

- changing value

### transition

- `bounce`(0.8) and `duration`(0.3) will be overridden if `stiffness`(100), `damping`(10) or `mass`(1) are set

- type `spring` by default

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

### whielHover / whileTap

- 이외 `whileFocus`, `whileDrag`, `whileInView`

### drag / dragContraints / dragElastic(0.5)

- `drag="x"`, `drag="y"` 로 축을 제한할 수 있다

- ```javascript
  dragContraints={{ top: 0, right: 0, bottom: 0, left: 0, }}

  // === dragSnapToOrigin 속성
  ```

  위처럼 직접 박스를 만들거나, `useRef`를 사용하여 제한한다

## Motion Value

- `useMotionValue(0)` 등 MotionValue가 바뀌어도, React state로 살지 않기 때문에, 리렌더링 되지 않는다(`without triggering React's render cycle`)
