import React, { Component } from 'react';
import {
  EmployeeDetailsContainer,
  EmployeeTitleContainer,
  EmployeeImage,
  EmployeeName,
  EmployeeTitle,
  EmployeeInfoContainer,
  ContactLink,
  InfoText,
  EditButton,
  EditInput,
} from './styles/EmployeePage.styles';
import {
  LABEL_CALL_OFFICE,
  LABEL_CALL_MOBILE,
  LABEL_SMS,
  LABEL_EMAIL,
} from 'constants/text';

class EmployeeDetails extends Component {
    constructor(props) {
      super(props);

      this.ENTER_KEY = 13;
      this.state = {
        isEditing: false,
        currentTitle: '',
      }
    }

    handleTitleEdit = () => {
      const { title } = this.props.employee;

      this.setState({
        isEditing: true,
        currentTitle: title,
      });
    }

    handleChange = evt => this.setState({ currentTitle: evt.target.value });

    handleKeyDown = evt => evt.which === this.ENTER_KEY && this.handleSubmit(evt);

    handleSubmit = evt => {
      const value = evt.target.value.trim();
      const { onTitleChange, employee } = this.props;
      value && this.setState(
        { isEditing: false },
        onTitleChange(employee.id, value)
      );
    }

    render() {
      const { isEditing, currentTitle } = this.state;
      const { employee } = this.props;
      const {
        firstName,
        lastName,
        title,
        pic,
        officePhone,
        mobilePhone,
        email,
      } = employee;

      return (
        <EmployeeDetailsContainer>
          <EmployeeTitleContainer>
            <EmployeeImage src={require(`images/${pic}`)} alt="img" />
            <div>
              <EmployeeName>{firstName} {lastName}</EmployeeName>
              <EmployeeTitle>
                {!!isEditing ?
                  <EditInput
                    value={currentTitle}
                    onChange={this.handleChange}
                    onBlur={this.handleSubmit}
                    onKeyDown={this.handleKeyDown}
                    autoFocus
                  /> :
                  title
                }
                <EditButton onClick={this.handleTitleEdit} />
              </EmployeeTitle>
            </div>
          </EmployeeTitleContainer>
          <EmployeeInfoContainer>
            <InfoText>{LABEL_CALL_OFFICE}</InfoText>
            <ContactLink href={`tel:${officePhone}`}>
              {officePhone}
            </ContactLink>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <InfoText>{LABEL_CALL_MOBILE}</InfoText>
            <ContactLink href={`tel:${mobilePhone}`}>
              {mobilePhone}
            </ContactLink>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <InfoText>{LABEL_SMS}</InfoText>
            <ContactLink href={`sms:${mobilePhone}`}>
              {mobilePhone}
            </ContactLink>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <InfoText>{LABEL_EMAIL}</InfoText>
            <ContactLink href={`mailto:${email}`}>
              {email}
            </ContactLink>
          </EmployeeInfoContainer>
        </EmployeeDetailsContainer>
      )
    };
  };

export default EmployeeDetails;
