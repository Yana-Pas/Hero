import selector from '../../data/selectors.json';
import expected from '../../data/expected.json';
import  {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Required fields and story created', function () {

    before('open application', function () {
        browser.maximizeWindow();
        browser.url('');
    });

   it('TC-026 The Submit button is enabled when required fields are filled in with valid values', function () {

        $(selector.nameField).setValue(name.default);
        $$(selector.genderButtons)[gender.she].click();
        $(selector.ageField).setValue(age.default);
        $(selector.storyField).click();
        $$(selector.storyList)[story.Comedy].click();
        browser.pause(2000);
        let submitBtn = $(selector.submitButton)
        expect(submitBtn.isEnabled()).toEqual(true);


    });

    it('TC-027 User is redirected to the story page', function () {
        browser.refresh();

        inputValues4(name.default, gender.she, age.default, story.Comedy);


        $(selector.submitButton).click();

        browser.pause(2000);

        let tryAgainBtn = $(selector.tryAgainBtn)
        expect(tryAgainBtn.isDisplayed()).toEqual(true);;


    });

});