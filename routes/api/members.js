const express = require('express');
const members = require('../../models/Members');

const router = express.Router();

/**
 * @get - Members
 */
router.get('/', (req, res) => {
  res.json(members);
});

/**
 * @get - Single Member
 * @params - Member Id
 */
router.get('/:id', (req, res) => {
  const {id} = req.params;
  const member = members.filter(member => member.id === parseInt(id, 10))[0];
  const found = members.some(member => member.id === parseInt(id, 10));
  if (found) res.json(member);
  else res.status(400).json({msg: 'Member not found with id of: ' + id});
})

/**
 * @post - Create member
 */
router.post('/', (req, res) => {
  res.send(req.body);
})

module.exports = router;