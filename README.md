# Framer Motion

[공식문서](https://www.framer.com/docs/introduction/)
[깃허브](https://github.com/framer/motion)

## Props

- initial
- animate
- transition
- variants
- whielHover / whileTap

### initial

- initial value

### animate

- changing value

### transition

- `bounce` and `duration` will be overridden if `stiffness`, `damping` or `mass` are set

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

-
