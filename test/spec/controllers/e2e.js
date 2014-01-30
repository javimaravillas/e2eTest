'use strict';

describe('Controller: E2eCtrl', function() {

  var oldCount = 0;

  // Initialize the controller and a mock scope
  beforeEach(function() {
    browser().navigateTo('/#/e2e');
  });

  it('Click the button: Get an extra LI element', function() {
    element('ul.children').query(function($el, done) {
      oldCount = $el.children().length;
      done();
    });

    element('button.liadder').query(function($el, done) {
      $el.click();
      done();
    });

    expect(repeater('ul li.child').count()).toBe(oldCount + 1);

  });

  it('create a new user & verify the user is added to listing', function() {

    //fill the form values
    input('first').enter('Jack');

    //click on submit btn
    element('#btn_submit').click();

    //check the newly created value is added back to list
    expect(element('.output').html()).toContain('Jack');
  });


});

describe('Controller: FilterCtrl', function() {

  // load the controller's module
  beforeEach(function() {
    browser().navigateTo('/#/filter');
  });

});