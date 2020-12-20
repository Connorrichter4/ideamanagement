package com.hcl.hclideas.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Table(name = "USER_DEF")
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long Id;
	
	@Column(name = "EMAIL_ID")
	private String emailId;
	
	@Column(name = "USER_NAME")
	private String userName;

	@Column(name = "PASSWORD")
	private String password;

}
