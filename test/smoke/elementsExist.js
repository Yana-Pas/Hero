import selector from '../../data/selectors.json';
import expected from '../../data/expected.json';

describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        before('open application', function() {
            browser.url('');
        });

        it('TC-001 Page title is correct ', function () {

            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual(expected.title);
        });

    });

    describe('Elements exist', function () {

        before('open application', function() {
            browser.maximizeWindow();
            browser.url('');

        });

        it('TC-002 Header is present ', function () {
            let pageHeader = $(selector.pageHeader);
            expect(pageHeader.isDisplayed()).toEqual(true);
        });

        it('TC-003 Instruction is present  ', function () {
            let pageInstruction = $(selector.pageInstruction);
            expect(pageInstruction.isDisplayed()).toEqual(true);
        });

        it('TC-004 Name field is present  ', function () {
            let nameField = $(selector.nameField);
            expect(nameField.isDisplayed()).toEqual(true);
        });

        it('TC-005 Name field label is present  ', function () {
            let nameLabel = $(selector.nameLabel);
            expect(nameLabel.isDisplayed()).toEqual(true);
        });

        it('TC-006 Gender radio buttons are present  ', function () {
            let genderButtons = $$(selector.genderButtons);
            expect(genderButtons).toBeElementsArrayOfSize(3)
        });

        it('TC-007 Gender radio buttons label is present ', function () {
            let genderLabel = $(selector.genderLabel);
            expect(genderLabel.isDisplayed()).toEqual(true);
        });

        it('TC-008 Age field is present  ', function () {
            let ageField = $(selector.ageField);
            expect(ageField.isDisplayed()).toEqual(true);
        });

        it('TC-009 Age field label is present  ', function () {
            let ageLabel = $(selector.ageLabel);
            expect(ageLabel.isDisplayed()).toEqual(true);
        });

        it('TC-0010 Story Type dropdown is present  ', function () {
            let storyField = $(selector.storyField);
            expect(storyField.isDisplayed()).toEqual(true);
        });

        it('TC-0011 Story Type dropdown label is present  ', function () {
            let storyLabel = $(selector.storyLabel);
            expect(storyLabel.isDisplayed()).toEqual(true);
        });

        it('TC-0012 Image field is present  ', function () {
            let imageField = $(selector.imageField);
            expect(imageField.isDisplayed()).toEqual(true);
        });

        it('TC-0013 Image field label is present  ', function () {
            let imageLabel = $(selector.imageLabel);
            expect(imageLabel.isDisplayed()).toEqual(true);
        });

        it('TC-0014 Submit button is present  ', function () {
            let submitButton = $(selector.submitButton);
            expect(submitButton.isDisplayed()).toEqual(true);
        });
    });

});