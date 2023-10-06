import { component$, Slot } from "@builder.io/qwik";


export default component$(() => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <div>
      <Slot name="foo"/>
    </div>
    <div>
      <Slot name="bar"/>
    </div>
  </div>
  );
});

