import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const UserProfile = () => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push('/profile-edit');
  };
  return (
    <section className="section-cart padding-tb-50">
      <div className="container">
        <Row className="mb-minus-24">
          <Col lg={3} className="mb-24">
            <Fade triggerOnce direction="up" duration={1000} delay={200}>
              <div className="bb-cart-sidebar-block bb-sidebar-wrap bb-border-box bb-sticky-sidebar">
                <div className="bb-vendor-block-items">
                  <ul>
                    <li>
                      <Link href="/user-profile">User Profile</Link>
                    </li>
                    <li>
                      <Link href="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link href="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link href="/track-order">Track Order</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          </Col>
          <Col lg={9}>
            <Fade
              triggerOnce
              direction="up"
              duration={1000}
              delay={200}
              className="bb-cart-table margin-buttom"
            ></Fade>
            <Fade
              triggerOnce
              direction="up"
              duration={1000}
              delay={400}
              className="bb-cart-table p-30"
            >
              <div className="">
                <div
                  style={{ position: 'relative' }}
                  className="gi-vendor-card-body"
                >
                  <button
                    onClick={handleSubmit}
                    style={{
                      position: 'absolute',
                      right: '0',
                      backgroundColor: 'white',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      border: 'none',
                    }}
                    className=""
                    type="submit"
                  >
                    Edit <i className="fi fi-re-pencil"></i>
                  </button>

                  <div className="bb-vender-about-block">
                    <h5>About Me</h5>
                    <p>{user?.username}</p>
                  </div>
                  <div className="bb-vender-about-block">
                    <h5>Account Information</h5>
                  </div>
                  <Row className="mb-minus-24px">
                    <Col md={6} sm={12} className="mb-24">
                      <div className="bb-vendor-detail-block">
                        <h6>E-mail address</h6>
                        <ul>
                          <li>
                            <strong>Email : </strong>
                            {user?.email}
                          </li>

                          <li>
                            <strong>Contact : </strong>
                            {user?.phoneNumber}
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default UserProfile;
