/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const {admin, db} = require("../util/admin");
const config = require("../util/config");

exports.getAllUsers = (req, res) =>{
  db.collection("users").get().then((data)=>{
    const users = [];
    data.forEach((doc)=>{
      users.push({
        "name": doc.data().name,
        "imageurl": doc.data().imageurl,
        "email": doc.data().email,
        "address": doc.data().address,
        "socialn": doc.data().socialn,
        "balance": doc.data().balance,
        "UID": doc.id,
      });
    });
    return res.status(200).json(users);
  })
      .catch(
          (err)=>{
            console.error(err);
          }
      );
};

exports.exchange = (req, res) =>{
  res.send({status: 200});
  // update sender
  console.log("uuid", req.body.sender);
  db.doc(`/users/${req.body.sender}`).get().then((doc)=>{
    console.log("sender");
    console.log(doc.data());
    let balance = doc.data().balance;
    balance = balance - parseInt(req.body.amount);
    db.doc(`/users/${req.body.sender}`).update({"balance": balance}).then(()=>{
      console.log("updated sender");
    }).catch(
        (err)=>{
          console.error(err);
        }
    );
  }).catch(
      (err)=>{
        console.error(err);
      }
  );

  // update receiver
  db.doc(`/users/${req.body.receiver}`).get().then((doc)=>{
    let balance = doc.data().balance;
    balance = balance + parseInt(req.body.amount);
    db.doc(`/users/${req.body.receiver}`).update({"balance": parseInt(balance)}).then(()=>{
      console.log("updated receiver");
    }).catch(
        (err)=>{
          console.error(err);
        }
    );
  }).catch(
      (err)=>{
        console.error(err);
      }
  );
  // Add a new document with a generated id.
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  db.collection("transfers").add({
    sender: req.body.sendername,
    receiver: req.body.receivername,
    senderid: req.body.sender,
    receiverid: req.body.receiver,
    amount: req.body.amount,
    date: today,
  })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
};

exports.cheque = (req, res) =>{
  db.collection("transfers").get().then((data)=>{
    const book = [];
    data.forEach((doc)=>{
      book.push({
        "sender": doc.data().sender,
        "receiver": doc.data().receiver,
        "senderid": doc.data().senderid,
        "receiverid": doc.data().receiverid,
        "amount": doc.data().amount,
        "date": doc.data().date,
      });
    });
    return res.status(200).json(book);
  })
      .catch(
          (err)=>{
            console.error(err);
          }
      );
};
