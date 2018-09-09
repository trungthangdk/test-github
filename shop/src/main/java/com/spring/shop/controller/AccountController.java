package com.spring.shop.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spring.shop.filter.JwtService;
import com.spring.shop.model.Account;
import com.spring.shop.service.AccountService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {
	@Autowired
	private AccountService accountService;
	@Autowired
	private JwtService jwtService;

	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> login(@RequestBody Account account) {
		Account accountSelected = accountService.checkLogin(account.getUserName(), account.getPassword());
		if (accountSelected != null) {
			String token = jwtService.generateTokenLogin(account.getUserName());
			Map<String, Object> map = new HashMap<>();
			map.put("account", account);
			map.put("token", token);
			return new ResponseEntity<>(map, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	}

	// @Pre
	// @PreAuthorize("hasRole('admin')")
	@RequestMapping(value = "/addAccount", method = RequestMethod.POST)
	public ResponseEntity<?> addAccount(@RequestBody Account account) {
		accountService.save(account);
		return new ResponseEntity<Account>(account, HttpStatus.CREATED);

	}

	// @PreAuthorize("hasRole('admin')")
	@RequestMapping(value = "/getAccount", method = RequestMethod.GET)
	public List<Account> getAccount() {
		return accountService.findAll();

	}

	@RequestMapping(value = "/getAccount", method = RequestMethod.POST)
	public List<Account> getAllAccount() {
		return accountService.findAll();

	}

	@RequestMapping(value = "/updateAccount", method = RequestMethod.POST)
	public ResponseEntity<?> updateAccount(@RequestBody Account account) {
		accountService.updateAccount(account);
		return new ResponseEntity<Account>(account, HttpStatus.ACCEPTED);
	}
	/*
	 * 
	 * register
	 */
	@PostMapping("/register")
	public ResponseEntity<Account> register(@RequestBody Account account){
		Account accountInserted = accountService.save(account);
		if(accountInserted != null) {
			return new ResponseEntity<Account>(accountInserted,HttpStatus.OK);
		}else {
			return new ResponseEntity<Account>(HttpStatus.BAD_REQUEST);
		}
	}
}
