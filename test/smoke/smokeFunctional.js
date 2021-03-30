import selector from '../../data/selectors.json';
import expected from '../../data/expected.json';

describe('Required fields and story created', function () {

    before('open application', function () {
        browser.maximizeWindow();
        browser.url('');
    });

   /* it('TC-026 The Submit button is enabled when required fields are filled in with valid values', function () {

        $(selector.nameField).setValue('LadyBug101');
        $$(selector.genderButtons)[1].click();
        $(selector.ageField).setValue('1234567890');
        $(selector.storyField).click();
        $$(selector.storyList)[6].click();
        browser.pause(2000);
        let submitBtn = $(selector.submitButton)
        expect(submitBtn.isEnabled()).toEqual(true);;


    });
*/
    it('TC-027 User is redirected to the story page', function () {

        $(selector.nameField).setValue('LadyBug101');
        $$(selector.genderButtons)[1].click();
        $(selector.ageField).setValue('1234567890');
        $(selector.storyField).click();
        $$(selector.storyList)[6].click();
        $(selector.submitButton).click();

        let tryAgainBtn = $(selector.tryAgainBtn)
        expect(tryAgainBtn.isDisplayed()).toEqual(true);;


    });

});