package com.ntt.data.customer.Repository;

import com.ntt.data.customer.enums.DocumentTypeEnum;
import com.ntt.data.customer.models.Customer;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class CustomerRepository {

    public Optional<Customer> findByDocumentTypeAndDocument(String documentType, Integer documentNumber) {
        if ("C".equals(documentType) && Integer.valueOf(23445322).equals(documentNumber)) {
            Customer mockCustomer = new Customer();
            mockCustomer.setDocument(23445322);
            mockCustomer.setDocumentType(DocumentTypeEnum.CEDULA);
            mockCustomer.setMiddleName("Juan");
            mockCustomer.setLastName("Perez");
            mockCustomer.setSecondLastName("Gomez");
            mockCustomer.setPhone(1234567890);
            mockCustomer.setAddress("123 Main Street");
            mockCustomer.setCityOfResidence("Bogotá");
            return Optional.of(mockCustomer);
        }
        return Optional.empty();
    }
}
