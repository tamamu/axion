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
  static loadTheme(uri) {
  }
}
