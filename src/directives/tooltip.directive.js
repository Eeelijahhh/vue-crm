export default {
  bind(element, { value, arg }) {
    M.Tooltip.init(element, { html: value, position: `${arg}` });
  },
  unbind(element) {
    const tooltip = M.Tooltip.getInstance(element);
    if (tooltip && tooltip.destroy) {
      tooltip.destroy();
    }
  }
}