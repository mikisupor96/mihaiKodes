import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_x5y1nzu";
  const templateID = "template_ID";
  const userID = "user_uTCWuohqrWYgC2lL5SoU5";

  const onSubmit = (data, action) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    action.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "I have recived your email and will get back to you within 24 hours!"
        );
      })
      .catch((e) => {
        console.error(`Something went wrong ${e}`);
      });
  };

  return (
    <div className="contact">
      <div className="text-center">
        <h1>GET IN CONTACT WITH ME</h1>
        <p>
          Please fill out the form and tell me more about how I can help with
          your project.
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col">
              <div className="col-md-6 col-xs-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 characters.",
                    },
                  })}
                />
                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                  name="phone"
                  {...register("phone", {
                    required: "Please enter a phone number",
                  })}
                />
                <span className="error-message">
                  {errors.phone && errors.phone.message}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Please enter your email address.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message:
                        "Please enter an email using the standard @ followed .com, .ro, etc",
                    },
                  })}
                />
                <span className="error-message">
                  {errors.email && errors.email.message}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", {
                    required: "Please enter a subject.",
                  })}
                />
                <span className="error-message">
                  {errors.subject && errors.subject.message}
                </span>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <textarea
                type="text"
                className="form-control"
                placeholder="Description"
                name="description"
                {...register("description", {
                  required:
                    "Please provide a brief description of why you are contacting me.",
                })}
              ></textarea>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn btn-light contact-btn" type="submit">
                CONTACT ME
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
