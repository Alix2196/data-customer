package com.ntt.data.customer.services;

import com.ntt.data.customer.Repository.CustomerRepository;
import com.ntt.data.customer.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServices {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer findCustomer(String documentType, Integer document){
        //validar documento que exista dentro de los enums
        //Crear lista de objetos
        Customer customer =  customerRepository.findByDocumentTypeAndDocument(documentType, document).get();
        return customer;
    }

}
