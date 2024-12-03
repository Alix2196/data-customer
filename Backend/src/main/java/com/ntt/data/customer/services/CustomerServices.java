package com.ntt.data.customer.services;

import com.ntt.data.customer.Repository.CustomerRepository;
import com.ntt.data.customer.enums.DocumentTypeEnum;
import com.ntt.data.customer.models.CustomerModel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.NoSuchElementException;

@Slf4j
@Service
public class CustomerServices {

    @Autowired
    private CustomerRepository customerRepository;

    public CustomerModel findCustomer(String documentType, Integer document){
        log.info("Starting findCustomer with documentType: {} and document: {}", documentType, document);
        try{

            boolean isValidDocumentType = Arrays.stream(DocumentTypeEnum.values())
                    .anyMatch(type -> type.getCode().equalsIgnoreCase(documentType));

            if (!isValidDocumentType) {
                log.error("No such document type: {}", documentType);
                throw new RuntimeException("No such document type " + documentType);
            }
            log.debug("Document type is valid: {}", documentType);

            CustomerModel customerModel = customerRepository.findByDocumentTypeAndDocument(documentType, document).get();
            log.info("Customer found: {}", customerModel);
            return customerModel;
        }catch(Exception ex){
            log.error("An unexpected error occurred: {}", ex.getMessage(), ex);
            throw new RuntimeException("Unexpected error occurred while finding customer.", ex);
        }
    }

}
