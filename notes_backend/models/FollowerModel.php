<?php

$db_dir = dirname(__FILE__);

require_once $db_dir . '/dataBaseConection.php';


class FollowerModel
{

    private $connection;

    private $follow_id;
    private $sender_id;
    private $receptor_id;
    private $created_at;


    public function __CONSTRUCT(){
        try {
            $this->connection=DatabaseConnection::dbConnection();
        }catch (Exception $exception){
            die($exception->getMessage());
        }
    }


    /**
     * @return mixed
     */
    public function getFollowId()
    {
        return $this->follow_id;
    }

    /**
     * @param mixed $follow_id
     */
    public function setFollowId($follow_id)
    {
        $this->follow_id = $follow_id;
    }

    /**
     * @return mixed
     */
    public function getSenderId()
    {
        return $this->sender_id;
    }

    /**
     * @param mixed $sender_id
     */
    public function setSenderId($sender_id)
    {
        $this->sender_id = $sender_id;
    }

    /**
     * @return mixed
     */
    public function getReceptorId()
    {
        return $this->receptor_id;
    }

    /**
     * @param mixed $receptor_id
     */
    public function setReceptorId($receptor_id)
    {
        $this->receptor_id = $receptor_id;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * @param mixed $created_at
     */
    public function setCreatedAt($created_at)
    {
        $this->created_at = $created_at;
    }

    public function addFollower(){
        try {
            $query = "INSERT INTO followers(sender_id, receptor_id, created_at) 
            values ('{$this->getSenderId()}','{$this->getReceptorId()}','{$this->getCreatedAt()}')";
            return $this->connection->query($query);
        }
        catch (Exception $exception) {
            $exception->getMessage();
        }
    }

    public function getFollowers($receptor_id){
        try {
            $query = "select fo.*,us.name, us.profile_img from followers fo inner join users us on fo.sender_id=us.user_id 
                      where fo.receptor_id = $receptor_id order by created_at DESC";
            //select fo.*,us.name, us.profile_img from followers fo inner join users us on fo.sender_id=us.user_id where fo.receptor_id = 2;
            return $this->connection->query($query);
        }
        catch (Exception $exception){
            $exception->getMessage();
        }
    }


}