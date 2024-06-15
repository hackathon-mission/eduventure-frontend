// src/components/SellItem.tsx
import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { User, Item } from '../data/interfaces';
import { serverUrl } from '../data/consts';
import { ObjectId } from 'mongodb';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

/*export const SellItem: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [selectedItem, setSelectedItem] = useState<ObjectId | null>(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        // Replace with the actual user ID and fetching logic
        fetch(`${serverUrl}/user/your_user_id`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    const handleSell = () => {
        if (selectedItem && user) {
            //fetch(`${serverUrl}/listing`, {
            //    method: 'POST'
            //    }}

    }
}
*/
