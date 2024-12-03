package com.ntt.data.customer.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ntt.data.customer.enums.DocumentTypeEnum;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerModel {

    @JsonIgnore
    private Integer document;
    @JsonIgnore
    private DocumentTypeEnum documentType;
    private String firstName;
    private String middleName;
    private String lastName;
    private String secondLastName;
    private Integer phone;
    private String address;
    private String cityOfResidence;

}
