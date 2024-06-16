import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Hubungi Saya</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nama:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Nomor Telepon:</label>
          <input type="tel" className="form-control" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Pesan:</label>
          <textarea className="form-control" id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Kirim</button>
      </form>
    </section>
  );
};

export default Contact;