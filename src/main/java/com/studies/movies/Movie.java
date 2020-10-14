package com.studies.movies;

import javax.persistence.*;

@Entity //This tells Hibernate to make a table out of this class
public class Movie {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String name;

    private String description;

    private Integer omdb;

    private Integer year;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getOmdb() {
        return omdb;
    }

    public void setOmdb(Integer omdb) {
        this.omdb = omdb;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }
}