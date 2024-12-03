package com.ntt.data.customer.Repository;

import com.ntt.data.customer.enums.DocumentTypeEnum;
import com.ntt.data.customer.models.CustomerModel;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class CustomerRepository {

    public Optional<CustomerModel> findByDocumentTypeAndDocument(String documentType, Integer documentNumber) {
        if (DocumentTypeEnum.CEDULA.getCode().equals(documentType) && Integer.valueOf(23445322).equals(documentNumber)) {
            CustomerModel mockCustomerModel = new CustomerModel();
            mockCustomerModel.setDocument(23445322);
            mockCustomerModel.setDocumentType(DocumentTypeEnum.CEDULA);
            mockCustomerModel.setMiddleName("Juan");
            mockCustomerModel.setFirstName("Sebastian");
            mockCustomerModel.setLastName("Perez");
            mockCustomerModel.setSecondLastName("Gomez");
            mockCustomerModel.setPhone(1234567890);
            mockCustomerModel.setAddress("123 Main Street");
            mockCustomerModel.setCityOfResidence("Bogotá");
            return Optional.of(mockCustomerModel);
        }
        return Optional.empty();
    }
}
