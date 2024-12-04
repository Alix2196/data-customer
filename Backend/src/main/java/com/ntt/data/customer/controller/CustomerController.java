package com.ntt.data.customer.controller;

import com.ntt.data.customer.models.CustomerModel;
import com.ntt.data.customer.services.CustomerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "*")
public class CustomerController {

    @Autowired
    private CustomerServices customerServices;

    @GetMapping
    public ResponseEntity<?> getCustomerInfo(
            @RequestParam String documentType,
            @RequestParam Integer document) {
        try{
            CustomerModel customerModel = customerServices.findCustomer(documentType, document);
            if (customerModel == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Customer not found.");
            }
            return ResponseEntity.status(HttpStatus.OK).body(customerModel);
        }catch(Exception ex){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An unexpected error occurred: " + ex.getMessage());
        }

    }

}
