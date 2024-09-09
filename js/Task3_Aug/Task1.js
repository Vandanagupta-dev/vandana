
class SMTPSettings {
    constructor() {
        this.addFormButton = document.getElementById('addAddform');
        this.closeFormButton = document.getElementById('closAddform');
        this.accordionItems = document.querySelectorAll('.accordion-item');
        this.passHidebtn = document.querySelectorAll('.passHidebtn');
        this.smtpForms = document.querySelectorAll('form[id^="smtpForm-"], #smtpForm');
        this.testSmtpBtn = document.querySelectorAll('.checkSMTP');
        this.saveButton = document.getElementById('addNewSmtp'); // Ensure this ID is correct
        this.requiredFields = [
            document.getElementById('description'),
            document.getElementById('smtpServer'),
            document.getElementById('username'),
            document.getElementById('port')
        ];

        this.initialize();
    }

    initialize() {
        if (this.addFormButton) {
            this.addFormButton.addEventListener('click', () => this.showForm());
        }
        if (this.closeFormButton) {
            this.closeFormButton.addEventListener('click', (event) => this.hideForm(event));
        }
        if (this.passHidebtn) {
            this.passHidebtn.forEach(btn => {
                btn.addEventListener('click', (event) => this.toggleEyeBtn(event));
            });
        }
        if (this.testSmtpBtn) {
            this.testSmtpBtn.forEach(btn => {
                btn.addEventListener('click', (event) => this.checkSmtp(event));
            });
        }

        // Add event listeners to required fields
        this.requiredFields.forEach(field => {
            field.addEventListener('input', () => this.checkFields());
        });

        // Initial check in case fields are already filled when page loads
        this.checkFields();
    }

    showForm() {
        // Implement form showing logic here
    }

    hideForm(event) {
        // Implement form hiding logic here
    }

    toggleEyeBtn(event) {
        // Implement password visibility toggle logic here
    }

    checkSmtp(event) {
        // Implement SMTP checking logic here
    }

    checkFields() {
        const allFilled = this.requiredFields.every(field => field.value.trim() !== '');
        if (this.saveButton) {
            this.saveButton.disabled = !allFilled;
        }
        if (this.testSmtpBtn) {
            this.testSmtpBtn.forEach(btn => btn.disabled = !allFilled);
        }
    }
}

// Initialize the SMTPSettings class when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    new SMTPSettings();
});




////Disable button
//document.addEventListener('DOMContentLoaded', () => {
//    const requiredFields = [
//        document.getElementById('description'),
//        document.getElementById('smtpServer'),
//        document.getElementById('username'),
//        document.getElementById('port')
//    ];

//    const saveButton = document.getElementById('addNewSmtp');
//    const testSMTPButton = document.getElementById('testSMTP');

//    function checkFields() {
//        // Check if all required fields are filled
//        const allFilled = requiredFields.every(field => field.value.trim() !== '');

//        // Enable or disable buttons based on field checks
//        saveButton.disabled = !allFilled;
//        testSMTPButton.disabled = !allFilled;
//    }

//    // Add input event listeners to the required fields
//    requiredFields.forEach(field => {
//        field.addEventListener('input', checkFields);
//    });

//    // Initial check in case fields are already filled when page loads
//    checkFields();
//});
//function checkFields() {
//    const allFilled = requiredFields.every(field => {
//        console.log(`${field.id}: ${field.value.trim()}`); // Log each field's value
//        return field.value.trim() !== '';
//    });

//    console.log(`All fields filled: ${allFilled}`); // Log the result

//    saveButton.disabled = !allFilled;
//    testSMTPButton.disabled = !allFilled;
//}