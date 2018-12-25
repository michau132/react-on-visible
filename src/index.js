/* global window, document */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindRaf} from './lib/bindRaf';
import cx from 'classnames';

function getCoords(box) { // crossbrowser version
    const body = document.body;
    const docEl = document.documentElement;
    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;
    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;

    return {
        top: Math.round(top),
        left: Math.round(left)
    };
}

const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

// Make a singleton observer instead of binding many listeners to window.
function Observer() {
    this.listeners = [];

    return {
        addEventListener: (listener) => {
            this.listeners.push(listener);
        },
        removeEventListener: (listenerToRemove) => this.listeners
            .filter((savedListener) => savedListener !== listenerToRemove),
        handler: throttle(() => {
            console.time('scroll');
            const pos = window.pageYOffset + window.innerHeight
            this.listeners
                .forEach((listener) => listener(pos));
            console.timeEnd('scroll');
        }, 100)
    };
}

const scrollObserver = new Observer();
// const resizeObserver = new Observer();

window.addEventListener('scroll', scrollObserver.handler);
// window.addEventListener('resize', resizeObserver.handler); // TODO: re-calculate boxTop & boxHeight

class OnVisible extends Component {
    constructor(...args) {
        super(...args);
        this.onScrollEnd = this.onScrollEnd.bind(this);
        // this.onScroll = bindRaf(this.onScroll.bind(this));
        this.state = {
            visbleTriggerRatio: (this.props.percent && this.props.percent / 100), // to not caclulate it in each scroll handler
            visible: false,
            bottom: 0,
            top: 0
        };
    }
    componentDidMount() {
        // Cache size and absolute offset
        setTimeout(() => {
            const box = this.holder.getBoundingClientRect();

            this.boxHeight = box.height;
            this.boxTop = getCoords(box).top;
            this.onScroll();
        }, 0);

        scrollObserver.addEventListener(this.onScroll.bind(this));
        // window.addEventListener('resize', this.onScroll);
    }
    componentWillUnmount() {
        this.stopListening();
    }

    // Do not create functions in onScroll handler
    onScrollEnd(visible) {
        return () => this.props.onChange(visible);
    }

    onScroll(pos) {
        const {boxTop, boxHeight} = this;
        const top = boxTop + (boxHeight * this.state.visbleTriggerRatio);
        const ppos = pos ? pos : window.pageYOffset + window.innerHeight;
        const visible = top < ppos;
        const somethingChanged = this.state.visible !== visible;
        const becameVisible = visible && !this.state.visible;

        if (somethingChanged) {
            this.setState(() => ({
                visible,
                top
            }), this.onScrollEnd(visible));
        }

        if (becameVisible && !this.props.bounce) {
            this.stopListening();
        }
    }

    stopListening() {
        scrollObserver.removeEventListener('scroll', this.onScroll);
        // window.removeEventListener('resize', this.onScroll);
    }
    render() {
        const {className, visibleClassName, children, wrappingElement, ...attributes} = this.props;
        const {visible} = this.state;
        const classes = cx(className, {
            [visibleClassName || 'visible']: visible
        });

        // other known properties which must not be passed to attributes
        delete attributes.percent;
        delete attributes.onChange;
        delete attributes.bounce;

        const invokingProps = {
            ...attributes,
            className: classes,
            ref: (el) => {
                this.holder = el || this.holder;
            }
        };

        return React.createElement(wrappingElement, invokingProps, children);
    }
}

OnVisible.defaultProps = {
    onChange: () => {}, // eslint-disable-line no-empty-function
    bounce: false,
    wrappingElement: 'div',
    percent: 50
};

OnVisible.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    visibleClassName: PropTypes.string,
    children: PropTypes.node,
    percent: PropTypes.number,
    onChange: PropTypes.func,
    bounce: PropTypes.bool,
    wrappingElement: PropTypes.string
};

export default OnVisible;

export function setDefaultProps(props) {
    Object.keys(props).forEach((key) => {
        OnVisible.defaultProps[key] = props[key];
    });
}
