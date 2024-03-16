import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$5 } from './nuxt-link-C-1ER_Z0.mjs';
import { defineComponent, computed, openBlock, createElementBlock, mergeProps, unref, renderSlot, normalizeClass, createBlock, Transition, toHandlers, withCtx, createElementVNode, withKeys, withModifiers, createTextVNode, toDisplayString, createVNode, withDirectives, vShow, useSSRContext, ref, resolveComponent, watch, provide, inject, getCurrentInstance, Fragment, renderList, warn } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderSlot, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useIdInjection, a as useRouter, b as useRoute, d as __nuxt_component_6$1, _ as _export_sfc$1 } from './server.mjs';
import { isString, NOOP, isObject, hasOwn, isArray } from '@vue/shared';
import { fromPairs, castArray } from 'lodash-unified';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-countup-v3';

const isUndefined = (val) => val === void 0;
const isNumber = (val) => typeof val === "number";
const isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
}
/*! Element Plus Icons Vue v2.3.1 */
var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const mutable = (val) => val;
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = namespaceOverrides || (getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace));
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides);
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$3 = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
const emitChangeFn = (value) => isNumber(value) || isString(value) || isArray(value);
const collapseProps = buildProps({
  accordion: Boolean,
  modelValue: {
    type: definePropType([Array, String, Number]),
    default: () => mutable([])
  }
});
const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn
};
const collapseContextKey = Symbol("collapseContextKey");
const useCollapse = (props, emit) => {
  const activeNames = ref(castArray(props.modelValue));
  const setActiveNames = (_activeNames) => {
    activeNames.value = _activeNames;
    const value = props.accordion ? activeNames.value[0] : activeNames.value;
    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
  };
  const handleItemClick = (name) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? "" : name]);
    } else {
      const _activeNames = [...activeNames.value];
      const index = _activeNames.indexOf(name);
      if (index > -1) {
        _activeNames.splice(index, 1);
      } else {
        _activeNames.push(name);
      }
      setActiveNames(_activeNames);
    }
  };
  watch(() => props.modelValue, () => activeNames.value = castArray(props.modelValue), { deep: true });
  provide(collapseContextKey, {
    activeNames,
    handleItemClick
  });
  return {
    activeNames,
    setActiveNames
  };
};
const useCollapseDOM = () => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => ns.b());
  return {
    rootKls
  };
};
const __default__$2 = defineComponent({
  name: "ElCollapse"
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: collapseProps,
  emits: collapseEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { activeNames, setActiveNames } = useCollapse(props, emit);
    const { rootKls } = useCollapseDOM();
    expose({
      activeNames,
      setActiveNames
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "collapse.vue"]]);
const __default__$1 = defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const ns = useNamespace("collapse-transition");
    const reset = (el) => {
      el.style.maxHeight = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    };
    const on = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        if (el.style.height)
          el.dataset.elExistsHeight = el.style.height;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        requestAnimationFrame(() => {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.dataset.elExistsHeight) {
            el.style.maxHeight = el.dataset.elExistsHeight;
          } else if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
          } else {
            el.style.maxHeight = 0;
          }
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          el.style.overflow = "hidden";
        });
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      enterCancelled(el) {
        reset(el);
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        reset(el);
      },
      leaveCancelled(el) {
        reset(el);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns).b()
      }, toHandlers(on)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "collapse-transition.vue"]]);
CollapseTransition.install = (app) => {
  app.component(CollapseTransition.name, CollapseTransition);
};
const _CollapseTransition = CollapseTransition;
const collapseItemProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: definePropType([String, Number]),
    default: void 0
  },
  disabled: Boolean
});
const useCollapseItem = (props) => {
  const collapse = inject(collapseContextKey);
  const { namespace } = useNamespace("collapse");
  const focusing = ref(false);
  const isClick = ref(false);
  const idInjection = useIdInjection();
  const id = computed(() => idInjection.current++);
  const name = computed(() => {
    var _a;
    return (_a = props.name) != null ? _a : `${namespace.value}-id-${idInjection.prefix}-${unref(id)}`;
  });
  const isActive = computed(() => collapse == null ? void 0 : collapse.activeNames.value.includes(unref(name)));
  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true;
      } else {
        isClick.value = false;
      }
    }, 50);
  };
  const handleHeaderClick = () => {
    if (props.disabled)
      return;
    collapse == null ? void 0 : collapse.handleItemClick(unref(name));
    focusing.value = false;
    isClick.value = true;
  };
  const handleEnterClick = () => {
    collapse == null ? void 0 : collapse.handleItemClick(unref(name));
  };
  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick
  };
};
const useCollapseItemDOM = (props, { focusing, isActive, id }) => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => [
    ns.b("item"),
    ns.is("active", unref(isActive)),
    ns.is("disabled", props.disabled)
  ]);
  const headKls = computed(() => [
    ns.be("item", "header"),
    ns.is("active", unref(isActive)),
    { focusing: unref(focusing) && !props.disabled }
  ]);
  const arrowKls = computed(() => [
    ns.be("item", "arrow"),
    ns.is("active", unref(isActive))
  ]);
  const itemWrapperKls = computed(() => ns.be("item", "wrap"));
  const itemContentKls = computed(() => ns.be("item", "content"));
  const scopedContentId = computed(() => ns.b(`content-${unref(id)}`));
  const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`));
  return {
    arrowKls,
    headKls,
    rootKls,
    itemWrapperKls,
    itemContentKls,
    scopedContentId,
    scopedHeadId
  };
};
const _hoisted_1 = ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex"];
const _hoisted_2 = ["id", "aria-hidden", "aria-labelledby"];
const __default__ = defineComponent({
  name: "ElCollapseItem"
});
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: collapseItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const {
      focusing,
      id,
      isActive,
      handleFocus,
      handleHeaderClick,
      handleEnterClick
    } = useCollapseItem(props);
    const {
      arrowKls,
      headKls,
      rootKls,
      itemWrapperKls,
      itemContentKls,
      scopedContentId,
      scopedHeadId
    } = useCollapseItemDOM(props, { focusing, isActive, id });
    expose({
      isActive
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        createElementVNode("button", {
          id: unref(scopedHeadId),
          class: normalizeClass(unref(headKls)),
          "aria-expanded": unref(isActive),
          "aria-controls": unref(scopedContentId),
          "aria-describedby": unref(scopedContentId),
          tabindex: _ctx.disabled ? -1 : 0,
          type: "button",
          onClick: _cache[0] || (_cache[0] = (...args) => unref(handleHeaderClick) && unref(handleHeaderClick)(...args)),
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => unref(handleEnterClick) && unref(handleEnterClick)(...args), ["stop", "prevent"]), ["space", "enter"])),
          onFocus: _cache[2] || (_cache[2] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
          onBlur: _cache[3] || (_cache[3] = ($event) => focusing.value = false)
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          createVNode(unref(ElIcon), {
            class: normalizeClass(unref(arrowKls))
          }, {
            default: withCtx(() => [
              createVNode(unref(arrow_right_default))
            ]),
            _: 1
          }, 8, ["class"])
        ], 42, _hoisted_1),
        createVNode(unref(_CollapseTransition), null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              id: unref(scopedContentId),
              role: "region",
              class: normalizeClass(unref(itemWrapperKls)),
              "aria-hidden": !unref(isActive),
              "aria-labelledby": unref(scopedHeadId)
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(itemContentKls))
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ], 10, _hoisted_2), [
              [vShow, unref(isActive)]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
var CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "collapse-item.vue"]]);
const ElCollapse = withInstall(Collapse, {
  CollapseItem
});
const ElCollapseItem = withNoopInstall(CollapseItem);
const _imports_0$9 = "" + buildAssetsURL("logo.ODMGqaVg.svg");
const _sfc_main$k = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$5;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/",
    class: "flex items-center cursor-pointer hvr-pulse-shrink"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$9)} class="h-8"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$9,
            class: "h-8"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/logo.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "single-nav-item",
  __ssrInlineRender: true,
  props: {
    item: { default: () => {
      return {
        link: "",
        name: "",
        img: ""
      };
    } }
  },
  setup(__props) {
    useRouter();
    const route = useRoute();
    const props = __props;
    const highLight = computed(() => {
      return route.path === props.item.link ? "text-primary-900 opacity-85 hover:opacity-100" : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hidden lg:block"><div class="${ssrRenderClass([unref(highLight), "mr-10 text-sm items-center hover:text-primary-900 cursor-pointer hvr-bounce-in hvr-underline-from-center py-4"])}">${ssrInterpolate(_ctx.item.name)}</div></div><div class="lg:hidden"><div class="${ssrRenderClass([unref(highLight), "mr-10 text-sm items-center hover:text-primary-900 cursor-pointer py-4"])}">${ssrInterpolate(_ctx.item.name)}</div></div></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/single-nav-item.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1649822344265",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><path class="fill-current" d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z" p-id="2128"></path></svg>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/triangle-down-line.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "nav-items",
  __ssrInlineRender: true,
  props: {
    size: { default: "large" },
    name: { default: "" },
    hideStatus: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const show = ref(false);
    watch(
      () => props.hideStatus,
      () => {
        show.value = false;
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconTriangleDownLine = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-sm mr-10" }, _attrs))} data-v-4e11a202><div class="relative hidden lg:block" data-v-4e11a202><div class="${ssrRenderClass([unref(show) ? "text-primary-900" : "text-white", "py-4 cursor-pointer flex items-center transition hvr-bounce-in hvr-underline-from-center"])}" data-v-4e11a202>${ssrInterpolate(_ctx.name)} `);
      _push(ssrRenderComponent(_component_IconTriangleDownLine, {
        class: [{ "rotate-180": unref(show) }, "ml-0.5 w-4 flex-shrink-0 transform transition inline"]
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(show) ? null : { display: "none" })}" class="absolute z-10" data-v-4e11a202><ul class="${ssrRenderClass([_ctx.size === "large" ? "w-56" : "", "w-40 px-4 pb-4 shadow-default list-none absolute top-2 -left-4 transform rounded-lg bg-[#222222bb]"])}" data-v-4e11a202>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul></div></div>`);
      _push(ssrRenderComponent(unref(ElCollapse), { class: "lg:hidden" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElCollapseItem), {
              title: _ctx.name,
              class: "py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ElCollapseItem), {
                title: _ctx.name,
                class: "py-4"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _: 3
              }, 8, ["title"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/nav-items.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__scopeId", "data-v-4e11a202"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "nav-item",
  __ssrInlineRender: true,
  props: {
    url: { default: "" },
    local: { type: Boolean, default: false },
    name: { default: "" }
  },
  setup(__props) {
    useRouter();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center rounded-md cursor-pointer mr-3 hover:text-primary-900 hover:lg:text-base text-sm" }, _attrs))}><span class="ml-2 mt-4 flex h-8 items-center"><span class="mr-1.5">${ssrInterpolate(_ctx.name)}</span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/nav-item.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "twitter",
  __ssrInlineRender: true,
  props: {
    href: {},
    name: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "https://twitter.com/LumozOrg",
        target: "_blank",
        class: "h-7 inline-block text-[#292929] transition flex items-center hvr-bounce-in"
      }, _attrs))} data-v-875644b8><svg class="h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-875644b8><path d="M27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0Z" class="fill-current" data-v-875644b8></path><path d="M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z" fill="white" data-v-875644b8></path></svg>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5 text-text-200" data-v-875644b8>${ssrInterpolate(_ctx.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/twitter.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__scopeId", "data-v-875644b8"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "discord",
  __ssrInlineRender: true,
  props: {
    href: {},
    name: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "https://discord.gg/lumoz",
        target: "_blank",
        class: "h-7 inline-block text-[#292929] transition flex items-center hvr-bounce-in"
      }, _attrs))} data-v-4755ff92><svg class="h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4755ff92><path d="M32 5C32 2.23858 29.7614 0 27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5Z" class="fill-current" data-v-4755ff92></path><path d="M14.552 15.712C14.096 15.712 13.736 16.112 13.736 16.6C13.736 17.088 14.104 17.488 14.552 17.488C15.008 17.488 15.368 17.088 15.368 16.6C15.376 16.112 15.008 15.712 14.552 15.712ZM17.472 15.712C17.016 15.712 16.656 16.112 16.656 16.6C16.656 17.088 17.024 17.488 17.472 17.488C17.928 17.488 18.288 17.088 18.288 16.6C18.288 16.112 17.928 15.712 17.472 15.712Z" fill="white" data-v-4755ff92></path><path d="M21.36 9H10.64C9.736 9 9 9.736 9 10.648V21.464C9 22.376 9.736 23.112 10.64 23.112H19.712L19.288 21.632L20.312 22.584L21.28 23.48L23 25V10.648C23 9.736 22.264 9 21.36 9ZM18.272 19.448C18.272 19.448 17.984 19.104 17.744 18.8C18.792 18.504 19.192 17.848 19.192 17.848C18.864 18.064 18.552 18.216 18.272 18.32C17.872 18.488 17.488 18.6 17.112 18.664C16.344 18.808 15.64 18.768 15.04 18.656C14.584 18.568 14.192 18.44 13.864 18.312C13.68 18.24 13.48 18.152 13.28 18.04C13.256 18.024 13.232 18.016 13.208 18C13.192 17.992 13.184 17.984 13.176 17.976C13.032 17.896 12.952 17.84 12.952 17.84C12.952 17.84 13.336 18.48 14.352 18.784C14.112 19.088 13.816 19.448 13.816 19.448C12.048 19.392 11.376 18.232 11.376 18.232C11.376 15.656 12.528 13.568 12.528 13.568C13.68 12.704 14.776 12.728 14.776 12.728L14.856 12.824C13.416 13.24 12.752 13.872 12.752 13.872C12.752 13.872 12.928 13.776 13.224 13.64C14.08 13.264 14.76 13.16 15.04 13.136C15.088 13.128 15.128 13.12 15.176 13.12C15.664 13.056 16.216 13.04 16.792 13.104C17.552 13.192 18.368 13.416 19.2 13.872C19.2 13.872 18.568 13.272 17.208 12.856L17.32 12.728C17.32 12.728 18.416 12.704 19.568 13.568C19.568 13.568 20.72 15.656 20.72 18.232C20.72 18.232 20.04 19.392 18.272 19.448Z" fill="white" data-v-4755ff92></path></svg>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5 text-text-200" data-v-4755ff92>${ssrInterpolate(_ctx.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/discord.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__scopeId", "data-v-4755ff92"]]);
const _imports_0$8 = "data:image/svg+xml,%3csvg%20width='15'%20height='12'%20viewBox='0%200%2015%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.899536%200.674652V2.43721L7.94978%205.96233L15%202.43721V0.674652H0.899536ZM0.899536%204.19977V11.25H15V4.19977L7.94978%207.72489L0.899536%204.19977Z'%20fill='white'/%3e%3c/svg%3e";
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "email",
  __ssrInlineRender: true,
  props: {
    href: {},
    name: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "mailto:contact@lumoz.org",
        class: "h-7 inline-block text-[#292929] transition flex items-center justify-center hvr-bounce-in"
      }, _attrs))} data-v-2a4561bd><div class="w-7 h-7 rounded bg-[#292929] hover:bg-[#34d399] flex items-center justify-center" data-v-2a4561bd><img${ssrRenderAttr("src", _imports_0$8)} class="w-4" data-v-2a4561bd></div>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5 text-text-200" data-v-2a4561bd>Email</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/email.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__scopeId", "data-v-2a4561bd"]]);
const _imports_0$7 = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1683788650546'%20class='icon'%20viewBox='0%200%201331%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3430'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='259.9609375'%20height='200'%3e%3cpath%20d='M1322.368%20225.536c0-119.68-85.888-215.9616-192-215.9616C986.5728%202.6624%20839.9616%200%20690.2272%200H643.5328C494.08%200%20347.2128%202.6624%20203.4432%209.5744%2097.5616%209.5744%2011.6992%20106.3936%2011.6992%20226.0736A3993.9584%203993.9584%200%200%200%202.56%20510.1312c-0.256%2094.6944%202.6112%20189.3888%208.832%20284.3392%200%20119.68%2085.888%20216.7552%20191.744%20216.7552%20151.04%207.168%20305.9712%2010.368%20463.488%2010.112%20157.7728%200.512%20312.1664-2.6624%20463.4368-10.112%20106.1376%200%20192.0256-97.0752%20192.0256-216.7552%206.2208-94.976%209.088-189.6448%208.832-284.5952%200.512-94.6944-2.3296-189.3888-8.576-284.3392zM539.7504%20771.072V248.3968l376.2688%20261.1712L539.7504%20771.072z'%20fill='%23ffffff'%20p-id='3431'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "youtube",
  __ssrInlineRender: true,
  props: {
    href: {},
    name: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "https://www.youtube.com/@LumozOrg",
        target: "_blank",
        class: "h-7 inline-block text-[#292929] transition flex items-center justify-center hvr-bounce-in"
      }, _attrs))} data-v-d95733f0><div class="w-7 h-7 rounded bg-[#292929] hover:bg-[#e93620] flex items-center justify-center" data-v-d95733f0><img${ssrRenderAttr("src", _imports_0$7)} class="w-4" data-v-d95733f0></div>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5 text-text-200" data-v-d95733f0>Youtube</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/youtube.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__scopeId", "data-v-d95733f0"]]);
const _sfc_main$b = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconTwitter = __nuxt_component_0$2;
  const _component_IconDiscord = __nuxt_component_1$2;
  const _component_IconEmail = __nuxt_component_2$1;
  const _component_IconYoutube = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_IconTwitter, null, null, _parent));
  _push(ssrRenderComponent(_component_IconDiscord, { class: "ml-3" }, null, _parent));
  _push(ssrRenderComponent(_component_IconEmail, { class: "ml-3" }, null, _parent));
  _push(ssrRenderComponent(_component_IconYoutube, { class: "ml-3" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/media.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "button",
  __ssrInlineRender: true,
  props: {
    word: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "home-button-corner px-4 py-1.5 text-black text-sm hvr-bounce-in" }, _attrs))} data-v-e02b154c>${ssrInterpolate(_ctx.word)}</button>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/button.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__scopeId", "data-v-e02b154c"]]);
const _imports_0$6 = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1665288072633'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4831'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M63.97608%20127.975696v127.909182h895.454322V127.975696H63.97608z%20m255.843946%20447.727161h639.610376V447.787536H319.820026v127.915321z%20m0%20319.780118h639.610376V767.541047H319.820026v127.941928zM63.97608%20575.702857h127.922485V447.787536H63.97608v127.915321z%20m0%20319.780118h127.922485V767.541047H63.97608v127.941928z'%20p-id='4832'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const vm = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
    useRouter();
    const menuShow = ref(false);
    const navHide = ref(false);
    const singleMenus = ref([
      { name: "Leaderboard", link: "", img: "" }
    ]);
    const menus = ref([
      {
        name: vm.$t("header.community.title"),
        list: [
          {
            name: vm.$t("header.community.developer"),
            local: false,
            url: "https://docs.lumoz.org"
          },
          {
            name: vm.$t("header.community.blog"),
            local: false,
            url: "https://mirror.xyz/lumozorg.eth"
          }
        ]
      }
    ]);
    const hideMenu = () => {
      menuShow.value = false;
    };
    const hideItems = () => {
      navHide.value = !navHide.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLogo = __nuxt_component_0$4;
      const _component_CommonSingleNavItem = _sfc_main$j;
      const _component_CommonNavItems = __nuxt_component_2$2;
      const _component_CommonNavItem = _sfc_main$g;
      const _component_CommonMedia = __nuxt_component_4$1;
      const _component_HomeButton = __nuxt_component_0$1;
      const _component_client_only = __nuxt_component_6$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed z-1 top-0 left-0 right-0 h-20 bg-filter flex items-center justify-between px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonLogo, null, null, _parent));
      _push(`<div class="hidden lg:flex items-center h-full"><!--[-->`);
      ssrRenderList(unref(singleMenus), (item) => {
        _push(ssrRenderComponent(_component_CommonSingleNavItem, {
          key: item.name,
          item,
          onClick: hideMenu
        }, null, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(menus), (item) => {
        _push(ssrRenderComponent(_component_CommonNavItems, {
          key: item.name,
          name: item.name,
          "hide-status": unref(navHide)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(item.list, (_item) => {
                _push2(ssrRenderComponent(_component_CommonNavItem, {
                  key: _item.name,
                  name: _item.name,
                  type: _item.type,
                  local: _item.local,
                  url: _item.url,
                  onClick: hideItems
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(item.list, (_item) => {
                  return openBlock(), createBlock(_component_CommonNavItem, {
                    key: _item.name,
                    name: _item.name,
                    type: _item.type,
                    local: _item.local,
                    url: _item.url,
                    onClick: hideItems
                  }, null, 8, ["name", "type", "local", "url"]);
                }), 128))
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="px-2 2xl:px-5 border-l border-r border-border-300">`);
      _push(ssrRenderComponent(_component_CommonMedia, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_HomeButton, {
        class: "ml-8",
        word: _ctx.$t("header.launch")
      }, null, _parent));
      _push(`</div><div class="lg:hidden relative">`);
      if (!unref(menuShow)) {
        _push(`<img${ssrRenderAttr("src", _imports_0$6)} class="w-6 mr-2 cursor-pointer hvr-bounce-in">`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _imports_0$5 = "" + buildAssetsURL("banner.Db47GLQq.mp4");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "banner",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fb649ec4>`);
      if (_ctx.active) {
        _push(`<video class="absolute top-0 bottom-0 left-0 right-0 home-video" id="Id" playsinline="true" autoplay="true" muted="false" loop="true" data-v-fb649ec4><source${ssrRenderAttr("src", _imports_0$5)} type="video/mp4" data-v-fb649ec4></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-banner-box" data-v-fb649ec4><div class="h-full w-full flex justify-center items-start pt-40" data-v-fb649ec4>`);
      if (_ctx.active) {
        _push(`<div class="flex items-center justify-center flex-col" data-v-fb649ec4><div class="typed-out text-3xl md:text-4xl lg:text-6xl py-4 font-bold text-center" data-v-fb649ec4>${ssrInterpolate(_ctx.$t("home.banner.title"))}</div><div class="typed-out-2s text-2xl py-4 text-primary-900 text-center" data-v-fb649ec4>${ssrInterpolate(_ctx.$t("home.banner.content"))}</div>`);
        _push(ssrRenderComponent(_component_HomeButton, {
          word: _ctx.$t("home.banner.start"),
          class: "mt-4 w-40 animate__animated animate__fadeIn animate__delay-3s"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/banner.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__scopeId", "data-v-fb649ec4"]]);
const _imports_0$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAAeCAYAAACWnXROAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgB7dy7TcRQEIXhY6AA6GAJyaACTAWICoAKlg7ogEcDSFSARAFAA0AFPCqAmADMPbq2bIKNvIGZ+3/SaK3Vhkej8ey1JQDA5KwLKECV6i3Vj5YQ+hUB0/fefu5qJAKPqWtS3Sp3+n0BBdhQDv6HRo41qwKm70t5nNlqrx8EBLenvsvPBATnGf5COfR3AgrgWd4rSof+TEABdlJ9Ku/lTwUU4Fi5y3ednn9hEd6Bcqd36F9THQoIblP9TO+6F8FHAY70N/ju/Dep5qlqDdaYVfsDoATNmgg8YqgWfN8suAb+JQfds/y1+pHGK0vfyJ4rz/QzsclBAA77ifptjY8dOOS1gGDc1b2V6Tr6lThjg6CG60iPLrWAoIZhfxJdHYEND489ihtRBOYb1G4T8yLCjuC6A2M8AILwhq/qmAsIzicju43MKLymA1PXvZ7Dgb8UEJwD/6w8zmwLCM6Bd9i/tQS/hn9O35I93acAAAAASUVORK5CYII=";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "box",
  __ssrInlineRender: true,
  setup(__props) {
    const id = ref("home-box" + Number(/* @__PURE__ */ new Date()) + Math.floor(Math.random() * 1e3));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "outer" + unref(id),
        class: "home-box-outer"
      }, _attrs))} data-v-43e59449><div class="home-box flex flex-col p-2 cursor-pointer"${ssrRenderAttr("id", unref(id))} data-v-43e59449><img${ssrRenderAttr("src", _imports_0$4)} class="h-3 mb-4 w-20" data-v-43e59449><div class="flex-1" data-v-43e59449>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/box.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-43e59449"]]);
const _imports_0$3 = "" + buildAssetsURL("icon1.CrlCNNOB.png");
const _imports_1$1 = "" + buildAssetsURL("icon2.DaLPAlH1.png");
const _imports_2$1 = "data:image/svg+xml,%3csvg%20width='55'%20height='62'%20viewBox='0%200%2055%2062'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M55%2021.6378C55%209.68854%2043.9448%200.00124339%2030.3059%200.00124339C23.8774%20-0.0609382%2017.6484%202.21105%2012.7955%206.38808C9.97318%208.4454%207.79597%2011.2517%206.51537%2014.4828C5.67932%2016.6356%205.19536%2018.9067%205.08176%2021.2106C5.04069%2023.8562%206.34619%2026.4466%205.19617%2029.0224C4.39624%2030.8243%202.31721%2032.3481%200.980415%2033.7847C0.980415%2033.7847%20-2.76301%2036.2521%204.37962%2036.5892C4.58107%2036.5989%205.48466%2040.8274%205.70957%2041.7951C5.55172%2042.0063%205.47227%2042.265%205.48465%2042.5275C5.48465%2043.3383%206.51635%2044%207.78469%2044H8.56017C6.88502%2044.2257%205.67535%2044.8718%205.67535%2045.7727C5.67535%2046.3927%206.47039%2047.2103%207.65854%2047.7005C7.65854%2047.7005%206.19168%2052.2468%208.36655%2053.2833C8.83422%2053.4612%209.34453%2053.4983%209.83341%2053.3899C12.9177%2053.5565%2018.439%2053.3395%2021.5077%2053.3395C21.5077%2053.2843%2023.1212%2061.9999%2023.1212%2061.9999H50.8517C50.8517%2062.0435%2048.1859%2042.2969%2048.1859%2042.2969C53.0657%2035.3744%2054.7555%2029.1774%2054.8474%2023.9986C54.9452%2023.2159%2054.9961%2022.4273%2054.9971%2021.6378H55ZM40.3871%2017.9702C39.437%2017.9679%2038.5072%2017.6972%2037.707%2017.1898C36.9067%2016.6824%2036.2692%2015.9594%2035.8692%2015.1057L32.1238%2017.2543C32.6962%2018.4174%2032.9498%2019.7092%2032.8592%2021.0001C32.7685%2022.2909%2032.3369%2023.5355%2031.6075%2024.6089L38.6328%2028.6408C39.0461%2028.2376%2039.5876%2027.9887%2040.1652%2027.9364C40.7428%2027.884%2041.3209%2028.0314%2041.8012%2028.3535C42.2815%2028.6756%2042.6344%2029.1525%2042.7999%2029.7032C42.9654%2030.2539%2042.9333%2030.8444%2042.709%2031.3743C42.4848%2031.9041%2042.0822%2032.3407%2041.5697%2032.6099C41.0572%2032.879%2040.4665%2032.964%2039.8979%2032.8504C39.3293%2032.7369%2038.818%2032.4318%2038.4508%2031.987C38.0836%2031.5422%2037.8832%2030.9852%2037.8837%2030.4106C37.8965%2030.1775%2037.9433%2029.9475%2038.0226%2029.7277L30.8036%2025.5854C29.7351%2026.703%2028.3438%2027.4658%2026.8204%2027.7691C25.297%2028.0724%2023.7161%2027.9015%2022.2947%2027.2796C20.8733%2026.6578%2019.6808%2025.6156%2018.8809%2024.2959C18.0811%2022.9762%2017.7129%2021.4437%2017.827%2019.9086C17.941%2018.3735%2018.5317%2016.9109%2019.5181%2015.7214C20.5044%2014.532%2021.838%2013.674%2023.336%2013.265C24.8341%2012.856%2026.4231%2012.9162%2027.8853%2013.4372C29.3474%2013.9582%2030.611%2014.9146%2031.5028%2016.1751L35.4722%2013.8986C35.2887%2012.8972%2035.4211%2011.8641%2035.8514%2010.9399C36.2817%2010.0157%2036.9889%209.2452%2037.8769%208.73326C38.7648%208.22133%2039.7905%207.99281%2040.8142%208.07878C41.838%208.16475%2042.8101%208.56105%2043.5984%209.21376C44.3867%209.86646%2044.9529%2010.7439%2045.22%2011.7267C45.4871%2012.7095%2045.442%2013.7499%2045.091%2014.7064C44.74%2015.6629%2044.1001%2016.4891%2043.2582%2017.0726C42.4164%2017.6561%2041.4136%2017.9685%2040.3862%2017.9673L40.3871%2017.9702Z'%20fill='url(%23paint0_linear_181_1272)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_181_1272'%20x1='27.5'%20y1='0'%20x2='27.5'%20y2='62'%20gradientUnits='userSpaceOnUse'%3e%3cstop/%3e%3cstop%20offset='1'%20stop-color='%23666666'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "arc",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    let timer = null;
    watch(() => props.active, () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (props.active) {
        timer = setTimeout(() => {
        }, 2e3);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeBox = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-arc-box",
        id: "b-animation"
      }, _attrs))} data-v-9403689a><div class="h-full w-full pt-20 overflow-y-auto hide-scroll" id="home-arc" data-v-9403689a><div class="container mx-auto" data-v-9403689a><div class="h-20 flex items-center" data-v-9403689a>`);
      if (_ctx.active) {
        _push(`<div class="text-2xl lg:text-4xl font-bold animate__animated animate__fadeIn animate__delay-1s pl-4 lg:pl-0" data-v-9403689a>${ssrInterpolate(_ctx.$t("home.arc.title"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mx-25 md:mx-10 lg:mx-20 xl:mx-40 flex justify-end pt-20 pb-40 lg:pt-40 lg:pb-0" data-v-9403689a><div class="w-full xl:w-3/5" data-v-9403689a>`);
      _push(ssrRenderComponent(_component_HomeBox, { class: "md:w-1/2 md:ml-1/4 lg:w-2/5 lg:ml-3/5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-9403689a${_scopeId}><div class="flex items-center justify-center flex-1" data-v-9403689a${_scopeId}><img${ssrRenderAttr("src", _imports_0$3)} class="w-16" data-v-9403689a${_scopeId}></div><div class="text-xl h-12 pl-4" data-v-9403689a${_scopeId}>${ssrInterpolate(_ctx.$t("home.arc.rollups"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "flex items-center justify-center flex-1" }, [
                  createVNode("img", {
                    src: _imports_0$3,
                    class: "w-16"
                  })
                ]),
                createVNode("div", { class: "text-xl h-12 pl-4" }, toDisplayString(_ctx.$t("home.arc.rollups")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HomeBox, { class: "mt-12 md:w-1/2 md:ml-1/4 lg:ml-0 lg:w-2/5 lg:-mt-40" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-9403689a${_scopeId}><div class="flex items-center justify-center flex-1" data-v-9403689a${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} class="w-16" data-v-9403689a${_scopeId}></div><div class="text-xl h-12 pl-4" data-v-9403689a${_scopeId}>${ssrInterpolate(_ctx.$t("home.arc.modular"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "flex items-center justify-center flex-1" }, [
                  createVNode("img", {
                    src: _imports_1$1,
                    class: "w-16"
                  })
                ]),
                createVNode("div", { class: "text-xl h-12 pl-4" }, toDisplayString(_ctx.$t("home.arc.modular")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HomeBox, { class: "mt-12 md:w-1/2 md:ml-1/4 lg:w-2/5 lg:ml-3/5 lg:-mt-40" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-9403689a${_scopeId}><div class="flex items-center justify-center flex-1" data-v-9403689a${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} class="w-16" data-v-9403689a${_scopeId}></div><div class="text-xl h-12 pl-4" data-v-9403689a${_scopeId}>${ssrInterpolate(_ctx.$t("home.arc.ai"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "flex items-center justify-center flex-1" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    class: "w-16"
                  })
                ]),
                createVNode("div", { class: "text-xl h-12 pl-4" }, toDisplayString(_ctx.$t("home.arc.ai")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="h-40" data-v-9403689a></div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/arc.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-9403689a"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "raas",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-raas-box",
        id: "c-animation"
      }, _attrs))} data-v-5e48638c><div class="h-full w-full pt-20" data-v-5e48638c>`);
      if (_ctx.active) {
        _push(`<div class="lg:w-1/2 lg:ml-1/6 flex items-center lg:items-start lg:justify-center h-full flex-col mt-8 lg:mt-0" data-v-5e48638c><div data-v-5e48638c><h1 class="text-2xl lg:text-6xl font-bold typed-out" data-v-5e48638c>${ssrInterpolate(_ctx.$t("home.raas.title"))}</h1></div><p class="px-4 md:w-1/2 md:px-0 lg:w-full lg:pr-16 2xl:w-1/2 2xl:px-0 mt-8 animate__animated animate__fadeIn animate__delay-2s" data-v-5e48638c>${ssrInterpolate(_ctx.$t("home.raas.content"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/raas.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-5e48638c"]]);
const _imports_0$2 = "" + buildAssetsURL("ai.C8bREhnv.mp4");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ai",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a2a2de3a>`);
      if (_ctx.active) {
        _push(`<video class="absolute top-0 bottom-0 left-0 right-0 home-video" id="Id" playsinline="true" autoplay="true" muted="false" loop="true" data-v-a2a2de3a><source${ssrRenderAttr("src", _imports_0$2)} type="video/mp4" data-v-a2a2de3a></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-ai-box" data-v-a2a2de3a><div class="h-full w-full pt-20" data-v-a2a2de3a>`);
      if (_ctx.active) {
        _push(`<div class="lg:w-1/2 lg:ml-1/2 2xl:ml-2/3 flex items-center lg:items-start lg:justify-center h-full flex-col mt-8 lg:mt-0" data-v-a2a2de3a><div data-v-a2a2de3a><h1 class="text-2xl lg:text-6xl font-bold typed-out" data-v-a2a2de3a>${ssrInterpolate(_ctx.$t("home.ai.title"))}</h1></div><p class="px-4 md:w-1/2 md:px-0 lg:w-full lg:pr-16 2xl:w-2/3 2xl:px-0 2xl:pr-16 mt-8 animate__animated animate__fadeIn animate__delay-2s" data-v-a2a2de3a>${ssrInterpolate(_ctx.$t("home.ai.content"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ai.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-a2a2de3a"]]);
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='url(%23paint0_linear_5981_13919)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.53345%208.50904L6.74507%207.21313C6.47397%207.66327%206.24339%208.1366%206.05605%208.62755L8.15163%209.30568C8.26085%209.03185%208.38841%208.7657%208.53345%208.50904ZM10.2527%206.52403L8.63877%205.00098C8.14283%205.41738%207.69365%205.88649%207.29914%206.40003L9.08203%207.69155C9.42226%207.25527%209.81551%206.86307%2010.2527%206.52403ZM7.8532%2010.2483L5.75872%209.57013C5.6284%2010.0773%205.54322%2010.5951%205.50418%2011.1173H7.71057C7.73894%2010.8248%207.78659%2010.5345%207.8532%2010.2483ZM8.05947%2013.9966L5.96718%2014.6748C6.14457%2015.1823%206.36862%2015.6724%206.63645%2016.1386L8.43031%2014.8394C8.28715%2014.5656%208.16323%2014.2822%208.05947%2013.9911V13.9966ZM8.95037%2015.6777L7.17187%2016.9648C7.58483%2017.5316%208.06362%2018.0472%208.59818%2018.501L10.2088%2016.9802C9.73205%2016.6032%209.3087%2016.1632%208.95037%2015.6722V15.6777ZM7.69521%2012.2651H5.50089C5.52596%2012.7577%205.59239%2013.2474%205.69947%2013.7289L7.80493%2013.0475C7.75365%2012.7871%207.71702%2012.5241%207.69521%2012.2596V12.2651Z'%20fill='%23314F00'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.3012%207.50488C13.2843%207.50529%2012.301%207.86908%2011.5287%208.53063C10.7564%209.19218%2010.2459%2010.108%2010.0892%2011.1128H12.2495C12.407%2010.6158%2012.7394%2010.1928%2013.1849%209.92213C13.6305%209.65147%2014.159%209.55153%2014.6726%209.64084C15.1862%209.73014%2015.6501%2010.0026%2015.9781%2010.4078C16.3062%2010.813%2016.4763%2011.3234%2016.4569%2011.8444C16.4374%2012.3654%2016.2298%2012.8617%2015.8725%2013.2413C15.5152%2013.6209%2015.0323%2013.8581%2014.5135%2013.9089C13.9947%2013.9597%2013.475%2013.8207%2013.0509%2013.5176C12.6267%2013.2145%2012.3268%2012.7679%2012.2067%2012.2606H10.0738C10.1694%2013.0764%2010.4989%2013.8473%2011.0225%2014.4802C11.5461%2015.113%2012.2415%2015.581%2013.025%2015.8277C13.8084%2016.0744%2014.6465%2016.0893%2015.4382%2015.8705C16.2299%2015.6518%2016.9414%2015.2088%2017.4872%2014.5948C18.0329%2013.9809%2018.3895%2013.2223%2018.514%2012.4103C18.6385%2011.5983%2018.5256%2010.7677%2018.1889%2010.0184C17.8522%209.26916%2017.3061%208.63324%2016.6163%208.18728C15.9265%207.74132%2015.1225%207.50433%2014.3012%207.50488Z'%20fill='%23314F00'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_5981_13919'%20x1='3.43246e-07'%20y1='5.33333'%20x2='21.9914'%20y2='19.7231'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23BEFE00'/%3e%3cstop%20offset='0.71875'%20stop-color='%2330F200'/%3e%3cstop%20offset='1'%20stop-color='%2300F780'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "data",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CountUp = resolveComponent("CountUp");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-data-box" }, _attrs))} data-v-afd2668e><div class="h-full w-full pt-20 overflow-y-auto hide-scroll flex items-center justify-center" id="home-data" data-v-afd2668e><div class="flex items-center flex-col w-full px-4 lg:px-0" data-v-afd2668e>`);
      if (_ctx.active) {
        _push(`<div data-v-afd2668e><h1 class="text-2xl lg:text-6xl font-bold typed-out" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.title1"))}</h1><div class="flex justify-center" data-v-afd2668e><h1 class="text-2xl lg:text-6xl font-bold typed-out-2s text-center" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.title2"))}</h1></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="home-data-data-box rounded-lg lg:rounded-full mt-12 grid grid-cols-2 w-full lg:w-2/3 xl:w-1/2 relative" data-v-afd2668e>`);
      if (_ctx.active) {
        _push(`<div class="home-data-grid-1 flex flex-col items-center justify-center" data-v-afd2668e>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": Number(28403),
          duration: 2,
          "decimal-places": 0,
          delay: 2,
          class: "text-lg lg:text-3xl font-bold"
        }, null, _parent));
        _push(`<div class="mt-4 text-[#999]" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.nodes"))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.active) {
        _push(`<div class="flex flex-col items-center justify-center" data-v-afd2668e>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": Number(16),
          duration: 2,
          "decimal-places": 0,
          delay: 2,
          class: "text-lg lg:text-3xl font-bold"
        }, null, _parent));
        _push(`<div class="mt-4 text-[#999]" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.ser"))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.active) {
        _push(`<div class="flex flex-col items-center justify-center" data-v-afd2668e>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": Number(20002146),
          duration: 2,
          "decimal-places": 0,
          delay: 2,
          class: "text-lg lg:text-3xl font-bold"
        }, null, _parent));
        _push(`<div class="mt-4 text-[#999]" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.trans"))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.active) {
        _push(`<div class="home-data-grid-2 flex flex-col items-center justify-center" data-v-afd2668e>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": Number(4791671),
          duration: 2,
          "decimal-places": 0,
          delay: 2,
          class: "text-lg lg:text-3xl font-bold"
        }, null, _parent));
        _push(`<div class="mt-4 text-[#999]" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.zkp"))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="circleBox absolute w-40 h-40 left-1/2 top-1/2 -mt-20 -ml-20 flex items-center justify-center" data-v-afd2668e><div class="circle z-1 border border-6 border-[#C8D1B3] rounded-full" data-v-afd2668e><img${ssrRenderAttr("src", _imports_0$1)} class="w-16 h-16 border border-6 border-[#E0FF94] rounded-full" data-v-afd2668e></div><div class="circle1 w-10 h-10 z-0" data-v-afd2668e></div><div class="circle2 w-10 h-10 z-0" data-v-afd2668e></div><div class="circle3 w-10 h-10 z-0" data-v-afd2668e></div><div class="w-28 h-28 border absolute rounded-full border-[#99999944]" data-v-afd2668e></div><div class="w-40 h-40 border absolute rounded-full border-[#99999944]" data-v-afd2668e></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/data.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-afd2668e"]]);
const _imports_0 = "" + buildAssetsURL("footer.BJqA6y1w.avif");
const _imports_1 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_625)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_625)'/%3e%3cpath%20d='M36%2023.5C35.3625%2023.8%2034.725%2023.9%2033.9813%2024C34.725%2023.6%2035.2563%2023%2035.4688%2022.2C34.8313%2022.6%2034.0875%2022.8%2033.2375%2023C32.6%2022.4%2031.6438%2022%2030.6875%2022C28.4563%2022%2026.7563%2024%2027.2875%2026C24.4188%2025.9%2021.8688%2024.6%2020.0625%2022.6C19.1063%2024.1%2019.6375%2026%2021.125%2027C20.5938%2027%2020.0625%2026.8%2019.5312%2026.6C19.5312%2028.1%2020.7%2029.5%2022.2938%2029.9C21.7625%2030%2021.2313%2030.1%2020.7%2030C21.125%2031.3%2022.4%2032.3%2023.9937%2032.3C22.7187%2033.2%2020.8063%2033.7%2019%2033.5C20.5938%2034.4%2022.4%2035%2024.3125%2035C30.7937%2035%2034.4062%2029.9%2034.1937%2025.2C34.9375%2024.8%2035.575%2024.2%2036%2023.5Z'%20fill='%23232937'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_625'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_625'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_625'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_630)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20d='M24.6895%2026.5878C25.5385%2026.5878%2026.2262%2027.2004%2026.2107%2027.9482C26.2107%2028.6969%2025.5402%2029.3087%2024.6895%2029.3087C23.8552%2029.3087%2023.1675%2028.6969%2023.1675%2027.9482C23.1675%2027.2004%2023.8397%2026.5878%2024.6895%2026.5878ZM30.1347%2026.5878C30.9853%2026.5878%2031.6576%2027.2004%2031.6576%2027.9482C31.6576%2028.6969%2030.9853%2029.3087%2030.1347%2029.3087C29.3003%2029.3087%2028.6135%2028.6969%2028.6135%2027.9482C28.6135%2027.2004%2029.284%2026.5878%2030.1347%2026.5878ZM31.5453%2033C34.7618%2032.9011%2036%2030.8291%2036%2030.8291C36%2026.2283%2033.9034%2022.4991%2033.9034%2022.4991C31.8085%2020.9572%2029.8131%2021.0001%2029.8131%2021.0001L29.6099%2021.2285C32.0846%2021.9714%2033.2337%2023.0432%2033.2337%2023.0432C31.8824%2022.3113%2030.3932%2021.8452%2028.8527%2021.6721C27.8757%2021.566%2026.8888%2021.5751%2025.914%2021.6993C25.8257%2021.6993%2025.7528%2021.7141%2025.6654%2021.7282C25.1569%2021.7719%2023.9186%2021.9565%2022.3623%2022.6285C21.8246%2022.8709%2021.5031%2023.0432%2021.5031%2023.0432C21.5031%2023.0432%2022.7121%2021.9137%2025.3309%2021.1716L25.1852%2021.0001C25.1852%2021.0001%2023.1915%2020.9581%2021.0949%2022.5007C21.0949%2022.5007%2019%2026.2291%2019%2030.8282C19%2030.8282%2020.2228%2032.8994%2023.4393%2033C23.4393%2033%2023.9769%2032.3585%2024.4151%2031.8152C22.5655%2031.271%2021.8683%2030.1282%2021.8683%2030.1282C21.8683%2030.1282%2022.0124%2030.2288%2022.2739%2030.3715C22.2885%2030.3855%2022.3022%2030.4003%2022.3323%2030.4135C22.376%2030.444%2022.4197%2030.4572%2022.4643%2030.4861C22.8279%2030.6856%2023.1915%2030.8423%2023.525%2030.9717C24.1227%2031.2001%2024.8353%2031.4285%2025.6662%2031.5868C26.9105%2031.8212%2028.1898%2031.8256%2029.4358%2031.6C30.1615%2031.4755%2030.8695%2031.2696%2031.5453%2030.9866C32.1349%2030.7672%2032.6967%2030.4842%2033.22%2030.1431C33.22%2030.1431%2032.492%2031.3139%2030.5849%2031.844C31.0222%2032.3866%2031.547%2033%2031.547%2033H31.5453Z'%20fill='%23232937'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_630)'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_630'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_630'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_630'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_635)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.3886%2022H33.6382C34.3875%2022%2035%2022.5749%2035%2023.2813V23.5489L29.036%2029.1651C28.6302%2029.5472%2028.0895%2029.758%2027.5144%2029.758C26.9402%2029.758%2026.3995%2029.5472%2025.9927%2029.1651L20.0297%2023.5489V23.2813C20.0297%2022.5749%2020.6393%2022%2021.3886%2022ZM20%2030.3077V24.4283L23.2576%2027.4964L20%2030.3077ZM34.9713%2024.4283V30.2905L31.7223%2027.4883L34.9713%2024.4283ZM28.5698%2030.1707C28.9134%2030.0366%2029.2254%2029.8397%2029.4877%2029.5913L29.4886%2029.5904L31.24%2027.9415L34.9713%2031.1601V31.7187C34.9713%2032.4251%2034.3607%2033%2033.6104%2033H21.3609C20.6106%2033%2020%2032.4251%2020%2031.7178V31.1772L23.74%2027.9496L25.4826%2029.5913C26.0176%2030.095%2026.7296%2030.3725%2027.4856%2030.3725C27.8576%2030.3734%2028.2261%2030.3048%2028.5698%2030.1707Z'%20fill='%23232937'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_635)'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_635'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_635'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_635'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_640)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20d='M27.25%2026.2353V30.7647L31%2028.4922L27.25%2026.2353ZM35.85%2031.6272C35.85%2031.6272%2035.7031%2032.7046%2035.2538%2033.1795C34.6831%2033.8026%2034.0438%2033.8052%2033.7506%2033.8415C31.6519%2034%2028.5031%2034%2028.5031%2034H28.4969C28.4969%2034%2025.3481%2034%2023.2494%2033.8415C22.9556%2033.8052%2022.3169%2033.8026%2021.7456%2033.1795C21.2962%2032.7046%2021.15%2031.6266%2021.15%2031.6266C21.15%2031.6266%2021%2030.3622%2021%2029.0972V27.9099C21%2026.6442%2021.15%2025.3786%2021.15%2025.3786C21.15%2025.3786%2021.2962%2024.3012%2021.7456%2023.8263C22.3169%2023.2032%2023.0662%2023.2232%2023.4%2023.1579C24.6%2023.0369%2028.5%2023%2028.5%2023C28.5%2023%2031.6519%2023.0052%2033.7506%2023.1631C34.0444%2023.1999%2034.6831%2023.2025%2035.2538%2023.8256C35.7038%2024.3006%2035.85%2025.3786%2035.85%2025.3786C35.85%2025.3786%2036%2026.6436%2036%2027.9092V29.0959C36%2030.3616%2035.85%2031.6272%2035.85%2031.6272Z'%20fill='%23232937'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_640)'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_640'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_640'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_640'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const footer = ref([
      {
        name: "Lumoz",
        list: [
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          }
        ]
      },
      {
        name: "Lumoz",
        list: [
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          }
        ]
      },
      {
        name: "Lumoz",
        list: [
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          }
        ]
      },
      {
        name: "Lumoz",
        list: [
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          },
          {
            name: "Leaderboard",
            url: "/leaderboard"
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b8b2bf4a><img${ssrRenderAttr("src", _imports_0)} class="h-80 w-full" data-v-b8b2bf4a><div class="-mt-40" data-v-b8b2bf4a><div class="w-full flex items-center justify-center" data-v-b8b2bf4a><div class="footer-linear-1 h-0.5 w-1/2" data-v-b8b2bf4a></div><div class="footer-linear-2 h-0.5 w-1/2" data-v-b8b2bf4a></div></div><div class="bg-[#000000] py-16 px-4 lg:px-32 lg:flex justify-between" data-v-b8b2bf4a><div class="grid grid-cols-2 md:grid-cols-4 gap-16" data-v-b8b2bf4a><!--[-->`);
      ssrRenderList(unref(footer), (item, index) => {
        _push(`<div class="flex flex-col" data-v-b8b2bf4a><div class="text-primary-900 text-lg mb-4 text-center lg:text-left" data-v-b8b2bf4a>${ssrInterpolate(item.name)}</div><!--[-->`);
        ssrRenderList(item.list, (_item, _index) => {
          _push(`<div class="mt-2 mx-auto" data-v-b8b2bf4a><a class="cursor-pointer text-[#ffffffaa] hover:text-primary-900 hvr-pulse" data-v-b8b2bf4a>Leaderboard</a></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div data-v-b8b2bf4a><div class="flex flex-col mt-16 lg:mt-0" data-v-b8b2bf4a><div class="text-primary-900 text-lg mb-4 text-center lg:text-left" data-v-b8b2bf4a>${ssrInterpolate(_ctx.$t("footer.find"))}</div><div class="flex justify-center lg:justify-start footer-icons" data-v-b8b2bf4a><a href="https://twitter.com/LumozOrg" target="_blank" class="rounded-full hvr-float" data-v-b8b2bf4a><img${ssrRenderAttr("src", _imports_1)} class="w-10" data-v-b8b2bf4a></a><a href="https://discord.gg/lumoz" target="_blank" class="ml-4 rounded-full hvr-float" data-v-b8b2bf4a><img${ssrRenderAttr("src", _imports_2)} class="w-10" data-v-b8b2bf4a></a><a href="mailto:contact@lumoz.org" class="ml-4 rounded-full hvr-float" data-v-b8b2bf4a><img${ssrRenderAttr("src", _imports_3)} class="w-10" data-v-b8b2bf4a></a><a href="https://www.youtube.com/@LumozOrg" target="_blank" class="ml-4 rounded-full hvr-float" data-v-b8b2bf4a><img${ssrRenderAttr("src", _imports_4)} class="w-10" data-v-b8b2bf4a></a></div></div></div></div></div><div class="bg-[#000000]" data-v-b8b2bf4a><div class="mx-4 lg:mx-32 py-4 border-t border-[#ffffff40] text-[#ffffff40] text-center" data-v-b8b2bf4a> \xA9 2024 Lumoz Org, Inc </div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-b8b2bf4a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "benifit",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeBox = __nuxt_component_0;
      const _component_CommonFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-ben-box" }, _attrs))} data-v-1cd7cee6><div class="h-full w-full pt-20 overflow-y-auto hide-scroll" id="home-ben" data-v-1cd7cee6><div class="container mx-auto" data-v-1cd7cee6><div class="h-20 flex items-center" data-v-1cd7cee6>`);
      if (_ctx.active) {
        _push(`<div class="text-2xl lg:text-4xl font-bold animate__animated animate__fadeIn animate__delay-1s pl-4 lg:pl-0" data-v-1cd7cee6>${ssrInterpolate(_ctx.$t("home.ben.title"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mx-25 md:mx-10 lg:mx-20 xl:mx-40 flex justify-end pt-20 pb-40 lg:pt-40 lg:pb-0" data-v-1cd7cee6><div class="w-full xl:w-3/5" data-v-1cd7cee6>`);
      _push(ssrRenderComponent(_component_HomeBox, { class: "md:w-1/2 md:ml-1/4 lg:w-2/5 lg:ml-3/5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-1cd7cee6${_scopeId}><div class="text-xl h-12 pl-4 font-bold" data-v-1cd7cee6${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.t1"))}</div><div class="text-xl px-4 mb-8 xl:text-base 2xl:text-xl" data-v-1cd7cee6${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.c1"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "text-xl h-12 pl-4 font-bold" }, toDisplayString(_ctx.$t("home.ben.t1")), 1),
                createVNode("div", { class: "text-xl px-4 mb-8 xl:text-base 2xl:text-xl" }, toDisplayString(_ctx.$t("home.ben.c1")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HomeBox, { class: "mt-12 md:w-1/2 md:ml-1/4 lg:ml-0 lg:w-2/5 lg:-mt-40" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-1cd7cee6${_scopeId}><div class="text-xl h-12 pl-4 font-bold" data-v-1cd7cee6${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.t2"))}</div><div class="text-xl px-4 mb-8 xl:text-base 2xl:text-xl" data-v-1cd7cee6${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.c2"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "text-xl h-12 pl-4 font-bold" }, toDisplayString(_ctx.$t("home.ben.t2")), 1),
                createVNode("div", { class: "text-xl px-4 mb-8 xl:text-base 2xl:text-xl" }, toDisplayString(_ctx.$t("home.ben.c2")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HomeBox, { class: "mt-12 md:w-1/2 md:ml-1/4 lg:w-2/5 lg:ml-3/5 lg:-mt-40" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-1cd7cee6${_scopeId}><div class="text-xl h-12 pl-4 font-bold" data-v-1cd7cee6${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.t3"))}</div><div class="text-xl px-4 mb-8 xl:text-base 2xl:text-xl" data-v-1cd7cee6${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.c3"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "text-xl h-12 pl-4 font-bold" }, toDisplayString(_ctx.$t("home.ben.t3")), 1),
                createVNode("div", { class: "text-xl px-4 mb-8 xl:text-base 2xl:text-xl" }, toDisplayString(_ctx.$t("home.ben.c3")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="h-40" data-v-1cd7cee6></div>`);
      _push(ssrRenderComponent(_component_CommonFooter, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/benifit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-1cd7cee6"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const now = ref(0);
    const fullpage = ref(null);
    const options = ref({
      licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      navigation: false,
      anchors: ["", "", "", "", "", "", "", "", "", ""],
      sectionsColor: [],
      controlArrows: false,
      lockAnchors: false,
      recordHistory: false,
      scrollOverflow: true,
      scrollingSpeed: 700,
      resize: true,
      beforeLeave: function(origin, destination, direction, trigger) {
        now.value = destination.index;
      },
      css3: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonHeader = _sfc_main$9;
      const _component_full_page = resolveComponent("full-page");
      const _component_HomeBanner = __nuxt_component_1$1;
      const _component_HomeArc = __nuxt_component_2;
      const _component_HomeRaas = __nuxt_component_3;
      const _component_HomeAi = __nuxt_component_4;
      const _component_HomeData = __nuxt_component_5;
      const _component_HomeBenifit = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_full_page, {
        ref_key: "fullpage",
        ref: fullpage,
        options: unref(options),
        id: "fullpage",
        class: "z-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeBanner, {
              active: unref(now) === 0
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeArc, {
              active: unref(now) === 1,
              onNext: ($event) => unref(fullpage).api.moveTo(3, 0),
              onBefore: ($event) => unref(fullpage).api.moveTo(1, 0)
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeRaas, {
              active: unref(now) === 2
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeAi, {
              active: unref(now) === 3
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeData, {
              active: unref(now) === 4,
              onNext: ($event) => unref(fullpage).api.moveTo(6, 0),
              onBefore: ($event) => unref(fullpage).api.moveTo(4, 0)
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeBenifit, {
              active: unref(now) === 5
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeBanner, {
                  active: unref(now) === 0
                }, null, 8, ["active"])
              ]),
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeArc, {
                  active: unref(now) === 1,
                  onNext: ($event) => unref(fullpage).api.moveTo(3, 0),
                  onBefore: ($event) => unref(fullpage).api.moveTo(1, 0)
                }, null, 8, ["active", "onNext", "onBefore"])
              ]),
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeRaas, {
                  active: unref(now) === 2
                }, null, 8, ["active"])
              ]),
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeAi, {
                  active: unref(now) === 3
                }, null, 8, ["active"])
              ]),
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeData, {
                  active: unref(now) === 4,
                  onNext: ($event) => unref(fullpage).api.moveTo(6, 0),
                  onBefore: ($event) => unref(fullpage).api.moveTo(4, 0)
                }, null, 8, ["active", "onNext", "onBefore"])
              ]),
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeBenifit, {
                  active: unref(now) === 5
                }, null, 8, ["active"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B54N8dcZ.mjs.map
