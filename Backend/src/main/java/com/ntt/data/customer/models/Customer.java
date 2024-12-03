package com.ntt.data.customer.models;

import com.ntt.data.customer.enums.DocumentTypeEnum;

public class Customer {

    private Integer document;
    private DocumentTypeEnum documentType;
    private String firstName;
    private String middleName;
    private String lastName;
    private String secondLastName;
    private Integer phone;
    private String address;
    private String cityOfResidence;

    public Integer getDocument() {
        return document;
    }

    public void setDocument(Integer document) {
        this.document = document;
    }

    public DocumentTypeEnum getDocumentType() {
        return documentType;
    }

    public void setDocumentType(DocumentTypeEnum documentType) {
        this.documentType = documentType;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSecondLastName() {
        return secondLastName;
    }

    public void setSecondLastName(String secondLastName) {
        this.secondLastName = secondLastName;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCityOfResidence() {
        return cityOfResidence;
    }

    public void setCityOfResidence(String cityOfResidence) {
        this.cityOfResidence = cityOfResidence;
    }
}
