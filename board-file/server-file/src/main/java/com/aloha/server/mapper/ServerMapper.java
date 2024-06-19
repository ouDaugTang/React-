package com.aloha.server.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.server.dto.Board;

@Mapper
public interface ServerMapper {
    public int insertBoard(Board board) throws Exception;
    public Board selectBoard(int no) throws Exception;
    public List<Board> selectAllBoards() throws Exception;
    public int updateBoard(Board board) throws Exception;
    public int deleteBoard(int no) throws Exception;
}
