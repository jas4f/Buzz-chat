const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);
router.post('/clear-chat', async (req, res) => {
    const { chatId } = req.body;
    try {
        // Clear the chat in the database, assuming a MongoDB collection
        await Chat.updateOne({ _id: chatId }, { messages: [] });
        res.status(200).send({ message: 'Chat cleared successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to clear chat' });
    }
});


module.exports = router;
