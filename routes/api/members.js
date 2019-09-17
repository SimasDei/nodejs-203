const express = require('express');
const uuid = require('uuid');

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
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  }

  if (!newMember.name || !newMember.email) {
    const data = {
      success: false,
      msg: 'Name or Email is missing',
    }
    return res.status(400).json(data);
  } 
  
  members.push(newMember);
  const data = {
    members,
    success: true,
  };
  return res.status(200).json(data);
})

module.exports = router;