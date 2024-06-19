package com.aloha.server.service;

import java.util.List;

import com.aloha.server.dto.Board;

public interface ServerService {
    
    public int insertBoard(Board board) throws Exception;
    public Board selectBoard(int no) throws Exception;
    public List<Board> selectAllBoards() throws Exception;
    public int updateBoard(Board board) throws Exception;
    public int deleteBoard(int no) throws Exception;
}
