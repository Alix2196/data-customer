package com.ntt.data.customer.enums;

import lombok.Getter;

@Getter
public enum DocumentTypeEnum {
    CEDULA("C", "Cédula de Ciudadanía"),
    PASAPORTE("P", "Pasaporte");

    private final String code;
    private final String description;

    DocumentTypeEnum(String code, String description) {
        this.code = code;
        this.description = description;
    }

}