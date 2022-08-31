import Store, { TStore } from './Store';
import Component from "../Component";

export default function connect(Entity: typeof Component, mapStateToProps: (state: TStore) => TStore) {
  return class extends Entity {
    constructor(tag: string, props = {}) {

      const store = new Store();

      super(tag, { ...props, ...mapStateToProps(store.getState()) });

      store.on(Store.EVENT_UPDATE, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
}