import selector from '../../data/selectors.json';
import expected from '../../data/expected.json';

describe('Labels are correct', function () {

        before('open application', function () {
            browser.maximizeWindow();
            browser.url('');
        });

        it('TC-015 Header is "My Little Hero" ', function () {
            let pageHeader = $(selector.pageHeader);
            expect(pageHeader.getText()).toEqual(expected.pageHeader);
        });

        it('TC-016 Instruction text is correct ', function () {
            let pageInstruction = $(selector.pageInstruction);
            expect(pageInstruction.getText()).toEqual(expected.pageInstruction);
        });

        it('TC-017 The name label is correct ', function () {
            let nameLabel = $(selector.nameLabel);
            expect(nameLabel.getText()).toEqual(expected.nameLabel);
        });

        it('TC-018 The gender label is correct ', function () {
            let genderLabel = $(selector.genderLabel);
            expect(genderLabel.getText()).toEqual(expected.genderLabel);
        });

        it('TC-019 Radio button 1 label is correct ', function () {
            let radBut1 = $$(selector.genderButtons)[0];
            expect(radBut1.getText()).toEqual(expected.radBut1);
        });

        it('TC-020 Radio button 2 label is correct ', function () {
            let radBut2 = $$(selector.genderButtons)[1];
            expect(radBut2.getText()).toEqual(expected.radBut2);
        });

        it('TC-021 Radio button 3 label is correct ', function () {
            let radBut3 = $$(selector.genderButtons)[2];
            expect(radBut3.getText()).toEqual(expected.radBut3);
        });

        it('TC-022 The age label is correct ', function () {
            let ageLabel = $(selector.ageLabel);
            expect(ageLabel.getText()).toEqual(expected.ageLabel);
        });


        it('TC-023 The story type label is correct ', function () {
            let storyLabel = $(selector.storyLabel);
            expect(storyLabel.getText()).toEqual(expected.storyLabel);
        });

        it('TC-024 The upload image label is correct ', function () {
            let imageLabel = $(selector.imageLabel);
            expect(imageLabel.getText()).toEqual(expected.imageLabel);
        });

        it('TC-025 Submit button label is correct ', function () {
            let submitButton = $(selector.submitButton);
            expect(submitButton.getText()).toEqual(expected.submitButton);
        });

    });



