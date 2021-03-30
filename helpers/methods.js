import selector from "../data/selectors.json";

function inputValues4 (name, gender, age, story) {
    $(selector.nameField).setValue(name);
    $$(selector.genderButtons)[gender].click();
    $(selector.ageField).setValue(age);
    $(selector.storyField).click();
    $$(selector.storyList)[story].click();
}

module.exports = inputValues4;
