// ==UserScript==
// @name        New script
// @namespace   Violentmonkey Scripts
// @match       *://example.org/*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/6/12 10:06:56
// ==/UserScript==
(function() {
    'use strict';

    function clickNextVideo() {
        var nextButton = document.querySelector('div.next');
        if (nextButton) {
            nextButton.click();
            console.log('已点击下一个视频播放按钮');
        } else {
            console.log('未找到下一个视频播放按钮');
        }
    }

    function clickPlayVideo() {
        var playButton = document.querySelector('button.vjs-big-play-button');
        if (playButton) {
            playButton.click();
            console.log('已点击视频播放按钮');
        } else {
            console.log('未找到视频播放按钮');
        }
    }

    function clickMuteVideo() {
        var muteButton = document.querySelector('button.vjs-mute-control');
        if (muteButton) {
            muteButton.click();
            console.log('已点击静音按钮');
        } else {
            console.log('未找到静音按钮');
        }
    }

    function isVideoFinishedPlay() {
        var targetDiv = document.querySelector('div.video-js');
        if (targetDiv) {
            if (targetDiv.classList.contains('vjs-ended')) {
                return true;
            }
        }
        return false;
    }

    function continuousPlayVideo() {
        setInterval(function() {
            if (isVideoFinishedPlay()) {
                clickNextVideo();
                clickMuteVideo();
            }
        }, 1000)
    }

    if (document.readyState === 'complete') {
        clickMuteVideo();
    } else {
        window.onload = function() {
            setTimeout(clickMuteVideo(), 2000);
        };
    }
    continuousPlayVideo();
})();
