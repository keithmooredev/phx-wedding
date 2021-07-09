// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import 'phoenix_html';

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from './socket'

import { floor, getDaysHoursMins } from './util';

((window, document) => {
  fetch('/api/wedding_date')
    .then((resp) => {
      resp.json().then((data) => {
        // console.log(data);
        const weddingDate = new Date(data.wedding_date);
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minElement = document.getElementById('minutes');
        const secElement = document.getElementById('seconds');

        function initTimer() {
          const now = Date.now();
          const diff = weddingDate - now;
          const { days, hours, minutes, seconds } = getDaysHoursMins(diff);
          daysElement.innerHTML = floor(days);
          hoursElement.innerHTML = floor(hours);
          minElement.innerHTML = floor(minutes);
          secElement.innerHTML = floor(seconds);
        }

        initTimer();
        window.setInterval(initTimer, 500);
      });
    });
})(window, document);
