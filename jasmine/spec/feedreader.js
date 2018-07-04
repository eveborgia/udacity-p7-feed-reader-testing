/* global allFeeds loadFeed:true */
/* eslint no-undef: "error" */
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function () {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* This test loops through each feed in the allFeeds
     * object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('has a URL defined and the Url is not empty', function () {
      allFeeds.forEach(function (feed) {
        /* URL is defined  */
        expect(feed.url).toBeDefined();
        /* URL is not empty */
        expect(feed.length).not.toBe(0);
      });
    });

    /* This test loops through each feed in the allFeeds
     * object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('has a name defined and the name is not empty', function () {
      allFeeds.forEach(function (feed) {
        /* name is defined  */
        expect(feed.name).toBeDefined();
        /* name is not empty  */
        expect(feed.length).not.toBe(0);
      });
    });
  });


  /* New test suite named "The menu" */
  describe('The menu', function () {
    /* This test ensures the menu element is hidden by default. */
    it('hidden by default', function () {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* This test ensures the menu changes visibility when the menu
     * icon is clicked. This test should have two expectations:
     */
    it('display when clicked and hide when clicked again', function () {
      /* The menu displays when clicked */
      expect(document.querySelector('.menu-icon-link').classList.toggle('menu-hidden')).toBe(true);
      /* The menu hides when clicked again. */
      expect(document.querySelector('.menu-icon-link').classList.toggle('menu-hidden')).toBe(false);
    });
  });


  /* New test suite named "Initial Entries" */
  describe('Initial Entries', function () {
    /* loadFeed() is asynchronous so this test requires the use of
     * Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(function (done) {
      loadFeed(0, function () {
        done();
      });
    });
    /* This test ensures that is at least one single .entry element. */
    it('has at least a single entry element', function () {
      expect($('.entry .feed')).toBeDefined();
    });
  });


  /* New test suite named "New Feed Selection" */
  describe('New Feed Selection', function () {
    /* In this test the new feed is loaded by the loadFeed function. */
    let currentFeed;
    let newFeed;
    /* beforeEach function makes sure that the feed class is empty. */
    beforeEach(function (done) {
      $('.feed').empty();
      /* Loads the first feed of 0. */
      loadFeed(0, function () {
      /* The currentFeed variable locates the URL in the feed. */
        currentFeed = $('.feed').find(allFeeds.url);
        done();
      });
      /* loadFeed loads the second feed and locates the URL. */
      loadFeed(1, function () {
        newFeed = $('.feed').find(allFeeds.url);
        done();
      });
    });
    /* Both variables are tested not to be equal. */
    it('is loaded and the content changes', function () {
      expect(currentFeed).not.toBe(newFeed);
    });
  });
}());
