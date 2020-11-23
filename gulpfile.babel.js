"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/**/*.html",
                "./src/views/pages/*.html"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.html",
                "./src/views/**/*.html"
            ]
        },
        styles: {
            src: "./src/css/main.{scss,sass}",
            dist: "./dist/css/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/css/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/images/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/images/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/images/",
            watch: "./src/images/**/*.{jpg,jpeg,png,gif,svg,tiff}"
        },
        sprites: {
            src: "./src/images/svg/*.svg",
            dist: "./dist/images/sprites/",
            watch: "./src/images/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{eot,ttf,woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{eot,ttf,woff,woff2}"
        },
        favicons: {
            src: "./src/images/favicon/*.{jpg,jpeg,png,gif}",
            dist: "./dist/images/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "gzip"]));

export default development;
