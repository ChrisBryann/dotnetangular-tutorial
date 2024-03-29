﻿namespace API.Entities;

public class AppUser
{
    // Id is automatically our PK, but if you use another name, add [Key] on top of the definition
    public int Id { get; set; }

    public string UserName { get; set; }

    public byte[] PasswordHash { get; set; }

    public byte[] PasswordSalt { get; set; }
}
