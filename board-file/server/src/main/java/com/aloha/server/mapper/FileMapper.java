package com.aloha.server.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.server.dto.Files;

@Mapper
public interface FileMapper {

    public List<Files> selectAllFiles() throws Exception;
    
    public Files selectFileById(int no) throws Exception;
    
    public int insertFile(Files file) throws Exception;

    public int updateFile(Files fill) throws Exception;

    public int deleteFile(int no) throws Exception;

    public List<Files> listByParent(Files file) throws Exception;   
} 
