import("./bootstrap")
const rootEl = document.getElementById('app')!;
(async () => {
  const { mount } = await import('marketing/mount')
  mount(rootEl)
})()
