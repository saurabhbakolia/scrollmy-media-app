import {
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    IconButton,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyleModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
});

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip
                onClick={(e) => setOpen(true)}
                title="Add"
                sx={{
                    position: "fixed",
                    left: 20,
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 },
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    p={3}
                    borderRadius={5}
                >
                    <Typography
                        variant="h6"
                        color="gray"
                        textAlign={"center"}
                        component="h2"
                    >
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://fastly.picsum.photos/id/2/200/300.jpg?hmac=HiDjvfge5yCzj935PIMj1qOf4KtvrfqWX3j4z1huDaU"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span">
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind!"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                        fullWidth
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyleModal>
        </>
    );
};

export default Add;
