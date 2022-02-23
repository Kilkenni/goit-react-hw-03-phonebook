import { nanoid } from "nanoid";
import React from "react";
import style from "./ContactForm.module.css"

const INIT_STATE = {
    name: "",
    number: "", //phone
}

export default class ContactForm extends React.Component {
    

    state = { ...INIT_STATE };

    onInputChange = (event) => {
        const { name, value } = event.currentTarget;
        // const inputValue = event.currentTarget.value;
        this.setState({ [name]: value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({ id: nanoid(), ...this.state });
        this.setState(INIT_STATE);
    };

    render() {
        return (
            <form action="submit" className={style.formAddContact} onSubmit={this.onFormSubmit}>
                <label className={style.formLabel}>Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.onInputChange}
                        value={this.state.name}
                        className={style.formInput}
                    />
                </label>
                
                <label className={style.formLabel}>Phone number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.onInputChange}
                        value={this.state.number}
                        className={style.formInput}
                    />
                </label>
                
                <button type="submit" className={style.formBtnSubmit}>Add contact</button>
            </form>
        );
    };
}