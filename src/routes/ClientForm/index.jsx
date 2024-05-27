import React from 'react'
import emailjs from 'emailjs-com';
import './index.css';

function ClientForm() {
    
    const {VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_USER_ID} = import.meta.env
        const handleSubmit = (event) => {
          event.preventDefault();
      
          emailjs.sendForm(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, event.target, VITE_EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
                alert('Form submitted successfully!');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });
      
          event.target.reset(); // Reset the form after submission
        };

    return (
        <form onSubmit={handleSubmit} id='clientform' >
            <h1>Official Website Project Inquiry Form for JDLuisDev</h1>
            <p>Dear Potential Client,</p>
            <p>At JDLuisDev, we strive to provide high-quality web development services tailored to your specific needs. To better understand your requirements and provide you with an accurate project estimate, we kindly request that you complete the following inquiry form.</p>

            <h2>Client Information</h2>
            <label>
                Full Name:
                <input type="text" name="fullName" required />
            </label>
            <label>
                Email Address:
                <input type="email" name="email" required />
            </label>
            <label>
                Phone Number:
                <input type="tel" name="phone" />
            </label>

            <h2>Project Details</h2>
            <label>
                What is the primary purpose of the website? (Informational, E-commerce, Portfolio, etc.):
                <input type="text" name="purpose" required />
            </label>
            <label>
                Approximately how many pages will the website require?
                <input type="number" name="pages" required />
            </label>
            <label>
                What type of content will be included on the website? (Text, Images, Videos, Forms, etc.):
                <input type="text" name="content" required />
            </label>
            <label>
                Are there any special features or functionalities required? (Social Media Integration, Shopping Cart, Booking System, etc.):
                <input type="text" name="features" />
            </label>
            <label>
                Do you have any specific design preferences or branding guidelines for the website?
                <textarea name="designPreferences"></textarea>
            </label>
            <label>
                Is it required for the website to be responsive (adaptable to different devices)?
                <select name="responsive" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>

            <h2>Technical Requirements</h2>
            <label>
                Do you have a preference for any particular technology or framework? (WordPress, React, Angular, etc.):
                <input type="text" name="technologyPreference" />
            </label>
            <label>
                Is integration with a Content Management System (CMS) or database required?
                <select name="cmsIntegration" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>
            <label>
                Do you require web hosting and domain registration services?
                <select name="hosting" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>

            <h2>Maintenance and Updates</h2>
            <label>
                Will you require ongoing maintenance and updates for the website after its launch?
                <select name="maintenance" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>
            <label>
                How frequently do you anticipate content updates?
                <input type="text" name="updateFrequency" />
            </label>

            <h2>Budget and Timeline</h2>
            <label>
                What is your approximate budget for this project?
                <input type="number" name="budget" required />
            </label>
            <label>
                Do you have a specific launch date or timeline in mind?
                <input type="date" name="timeline" />
            </label>

            <h2>Additional Comments</h2>

            <label>
                Please provide any additional requirements or comments you would like to share:
                <textarea name="additionalComments"></textarea>
            </label>

            <p>By providing detailed information through this inquiry form, we can better understand your project requirements and provide you with an accurate proposal and cost estimate.</p>
            <p>We appreciate your interest in JDLuisDev, and we look forward to the opportunity to discuss your project further.</p>
            <p>Thank you for your time and consideration.</p>
            <p>Best regards,</p>
            <p>JDLuisDev Team</p>

            <button type="submit">Submit</button>
        </form>
    );
}

export { ClientForm }