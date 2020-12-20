package com.hcl.hclideas.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Table(name = "IDEA")
@Entity
public class Idea {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long Id;

	@Column(name = "IDEA_NAME")
	private String ideaName;
	
	@Column(name = "CREATED_BY")
	private String createdBy;
}
