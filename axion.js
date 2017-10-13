/* Axion CSS Framework
 *
 * Copyright (c) Eddie.
 * Distributed under the terms of the MIT License.
 */


class Axion {
  /**
   * Append overlay layer to body
   * @param {Boolean} _bool whether show the overlay or not
   * @param {DOMElement?} _element inner element of the overlay
   * @return {DOMElement?} overlay element
   */
  static overlay(bool, element = null) {
    let body = document.body;
    if (bool) {
      let preexists = document.querySelectorAll('.ax-overlay');
      if (preexists.length > 0)
        return preexists[0];

      let layer = document.createElement('div');
      layer.classList.add('ax-overlay');
      if (element !== null) {
        layer.appendChild(element);
      }
      body.appendChild(layer);
      return layer;
    } else {
      let layers = document.querySelectorAll('.ax-overlay');
      for (let layer of layers) {
        body.removeChild(layer);
      }
      return null;
    }
  }
  /**
   * Toggle the components specified by selector
   * @param {String} _selector
   * @return null
   */
  static toggle(selector) {
    let components = document.querySelectorAll(selector);
    for (let component of components) {
      component.classList.toggle('ax-active');
    }
    return null;
  }
  static defaultTheme() {
    return {
      primary: {
        bg: '#3F51B5',
        fg: '#F9F9F9'
      },
      notify: {
        bg: '#E91E63',
        fg: '#F9F9F9'
      },
      normal: {
        bg: '#FEFEFE',
        fg: '#333333'
      },
      background: {
        bg: '#F9F9F9',
        fg: '#333333'
      }
    };
  }
  static loadTheme(uri) {
  }
  /**
   * Change the theme with settings
   * @params {String} _cssPath
   * @params {Object} _settings
   * @return null
   */
  static setTheme(cssPath, settings) {
    let css = document.styleSheets.item(cssPath);
    const primary = settings.primary;
    const notify = settings.notify;
    const normal = settings.normal;
    const background = settings.background;
    if (primary) {
      css.insertRule(
        `.ax-primary{background:${primary.bg};color:${primary.fg};}`,
        css.cssRules.length
      );
    }
    if (notify) {
      css.insertRule(
        `.ax-notify{background:${notify.bg};color:${notify.fg};}`,
        css.cssRules.length
      );
    }
    if (normal) {
      css.insertRule(
        `.ax-normal{background:${normal.bg};color:${normal.fg};}`,
        css.cssRules.length
      );
    }
    if (background) {
      css.insertRule(
        `.ax-background{background:${background.bg};color:${background.fg};}`,
        css.cssRules.length
      );
    }
  }
}
